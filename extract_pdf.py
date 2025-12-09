import sys

def extract_text(path):
    try:
        from pypdf import PdfReader
        reader = PdfReader(path)
        return '\n'.join([p.extract_text() for p in reader.pages])
    except ImportError:
        pass
    except Exception as e:
        return f"Error with pypdf: {e}"

    try:
        import PyPDF2
        reader = PyPDF2.PdfReader(path)
        return '\n'.join([p.extract_text() for p in reader.pages])
    except ImportError:
        pass
    except Exception as e:
        return f"Error with PyPDF2: {e}"

    return "FAILED: No suitable library found"

if __name__ == "__main__":
    # Use raw string for path to avoid escape issues
    print(extract_text(r"g:/내 드라이브/Project/RyuCmapLab_HomePage/류용효컨셉맵연구소 사업계획서_.pdf"))
