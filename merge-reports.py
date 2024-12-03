import json
import os

# Caminho da pasta onde os arquivos JSON estão localizados
results_dir = r"C:\\QAx\\automacao_biblioteca_totvs\\cypress\\results"

# Listar os arquivos JSON na pasta results
json_files = [f for f in os.listdir(results_dir) if f.endswith('.json')]

# Inicializar um dicionário para armazenar os dados combinados
combined_data = {}

# Carregar os arquivos JSON e combinar os resultados
for file_name in json_files:
    file_path = os.path.join(results_dir, file_name)
    
    with open(file_path, 'r') as file:
        data = json.load(file)
        
        # Se for o primeiro arquivo, inicialize com os dados
        if not combined_data:
            combined_data = data
        else:
            # Combine os resultados de cada arquivo
            combined_data["results"].extend(data.get("results", []))

# Salvar o arquivo combinado em um novo arquivo JSON
output_file = os.path.join(results_dir, "merged-report.json")
with open(output_file, 'w') as outfile:
    json.dump(combined_data, outfile, indent=4)

print(f"Arquivo combinado gerado: {output_file}")
