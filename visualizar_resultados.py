import streamlit as st
import json
import pandas as pd
import os
import matplotlib.pyplot as plt
import seaborn as sns

# Configurações da página
st.set_page_config(page_title="Relatório de Testes Automatizados", layout="wide")

# Título da aplicação
st.title("Relatório de Testes Automatizados")

# Caminho da pasta onde os arquivos JSON estão localizados
results_dir = r"C:\\QAx\\automacao_biblioteca_totvs\\cypress\\results"

# Listar os arquivos JSON na pasta results
json_files = [f for f in os.listdir(results_dir) if f.endswith('.json')]

# Selecione um arquivo JSON
selected_file = st.selectbox("Escolha o arquivo JSON de resultados", json_files)

if selected_file:
    # Caminho completo do arquivo selecionado
    file_path = os.path.join(results_dir, selected_file)

    # Ler o arquivo JSON
    with open(file_path, 'r') as file:
        try:
            data = json.load(file)
        except json.JSONDecodeError:
            st.error(f"Erro ao carregar o arquivo JSON: {selected_file}")
            data = {}

    # Verificar se a estrutura "results" existe
    if "results" in data:
        results = data["results"]

        # Criar uma lista para armazenar os dados do relatório
        report_data = []

        # Analisar os resultados dos testes dentro de cada "result"
        for result in results:
            suites = result.get("suites", [])
            for suite in suites:
                suite_name = suite.get("title", "Sem Nome")
                duration = suite.get("duration", 0) / 1000  # Converter duração para segundos
                passing = 0
                failing = 0
                pending = 0
                skipped = 0
                total_tests = 0

                # Analisar os resultados dos testes dentro de cada suite
                for test in suite.get("tests", []):
                    total_tests += 1
                    status = test.get("state", "Não informado")
                    if status == "passed":
                        passing += 1
                    elif status == "failed":
                        failing += 1
                    elif status == "pending":
                        pending += 1
                    elif status == "skipped":
                        skipped += 1

                # Adicionar os dados processados à lista do relatório
                report_data.append({
                    "Spec": suite_name,
                    "Duration (s)": f"{duration:.2f}",
                    "Tests": total_tests,
                    "Passing": passing,
                    "Failing": failing,
                    "Pending": pending,
                    "Skipped": skipped,
                })

        # Criar um DataFrame para exibir no Streamlit
        df_report = pd.DataFrame(report_data)

        # Exibir o resumo em formato de tabela
        st.subheader("Resumo dos Testes")
        st.dataframe(df_report, use_container_width=True)

        # Exibir os totais gerais
        st.subheader("Totais Gerais")
        total_tests = df_report["Tests"].sum()
        total_passing = df_report["Passing"].sum()
        total_failing = df_report["Failing"].sum()
        total_pending = df_report["Pending"].sum()
        total_skipped = df_report["Skipped"].sum()
        total_duration = df_report["Duration (s)"].astype(float).sum()

        st.write(f"**Total de Especificações:** {len(df_report)}")
        st.write(f"**Total de Testes:** {total_tests}")
        st.write(f"**Total de Sucessos:** {total_passing}")
        st.write(f"**Total de Falhas:** {total_failing}")
        st.write(f"**Total Pendentes:** {total_pending}")
        st.write(f"**Total Ignorados:** {total_skipped}")
        st.write(f"**Duração Total:** {total_duration:.2f} segundos")

        # Gráficos

        # Gráfico de barra - Resultados dos Testes (Passados, Falhados, Pendentes, Ignorados)
        st.subheader("Distribuição dos Resultados dos Testes")
        status_data = {
            'Passados': df_report['Passing'],
            'Falhados': df_report['Failing'],
            'Pendentes': df_report['Pending'],
            'Ignorados': df_report['Skipped']
        }
        
        status_df = pd.DataFrame(status_data)
        status_df = status_df.sum(axis=0)  # Soma por status

        plt.figure(figsize=(5, 3))  # Ajuste do tamanho menor
        sns.barplot(x=status_df.index, y=status_df.values, palette="viridis")
        plt.title("Distribuição dos Resultados dos Testes")
        plt.xlabel("Status")
        plt.ylabel("Quantidade de Testes")
        st.pyplot(plt)

        # Gráfico de linha - Duração dos Testes
        st.subheader("Duração dos Testes por Especificação")
        df_report['Duration (s)'] = df_report['Duration (s)'].astype(float)
        plt.figure(figsize=(6, 4))  # Ajuste do tamanho menor
        sns.lineplot(x=df_report['Spec'], y=df_report['Duration (s)'], marker='o', color='b')
        plt.title("Duração dos Testes por Especificação")
        plt.xlabel("Especificação")
        plt.ylabel("Duração (s)")
        plt.xticks(rotation=45, ha='right')
        st.pyplot(plt)

        # Permitir download do relatório como CSV
        st.subheader("Baixar Relatório")
        csv_data = df_report.to_csv(index=False).encode('utf-8')
        st.download_button(
            label="Baixar Relatório em CSV",
            data=csv_data,
            file_name="relatorio_testes.csv",
            mime="text/csv",
        )

    else:
        st.warning("O arquivo JSON não contém a chave 'results'. Verifique o arquivo.")

else:
    st.info("Não há arquivos JSON na pasta ou nenhum arquivo foi selecionado.")
