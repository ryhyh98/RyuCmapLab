import sys
from docx import Document

def extract_docx_text(path):
    try:
        doc = Document(path)
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)
        return '\n'.join(full_text)
    except Exception as e:
        return f"Error reading docx: {e}"

if __name__ == "__main__":
    # Use raw string for path
    print(extract_docx_text(r"g:\내 드라이브\Project\RyuCmapLab_HomePage\류용효컨셉맵연구소 사업계획서.docx"))
