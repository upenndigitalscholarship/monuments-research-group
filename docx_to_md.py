
#pandoc -f docx -t markdown /home/apjanco/Downloads/Seattle.docx -o ./seattle.md



from pathlib import Path 
import subprocess

originals = list(Path('original-essays/').iterdir())
essay = Path('essay/')

for original in originals:
    print(original)
    subprocess.run(['pandoc', '-f', 'docx', '-t', 'markdown', str(original), '-o', str(essay / original.name.replace('.docx', '.md').replace(' ', '-'))])
