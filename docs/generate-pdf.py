#!/usr/bin/env python3
"""Markdown 미팅 자료를 PDF로 변환하는 스크립트 (fpdf2)"""

import re
from fpdf import FPDF

FONT_PATH = "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc"
INPUT_PATH = "/home/user/badminton-market/docs/client-meeting-prep.md"
OUTPUT_PATH = "/home/user/badminton-market/docs/SMASH_배드민턴마켓_미팅자료.pdf"

# 색상 정의
BLACK = (17, 17, 17)
DARK = (51, 51, 51)
GRAY = (102, 102, 102)
LIGHT_GRAY = (221, 221, 221)
LIME = (200, 255, 0)
WHITE = (255, 255, 255)
TH_BG = (34, 34, 34)
EVEN_ROW = (245, 245, 245)
QUOTE_BG = (255, 254, 240)
CODE_BG = (244, 244, 244)


class MeetingPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("ko", "", FONT_PATH)
        self.add_font("ko", "B", FONT_PATH)
        self.set_auto_page_break(auto=True, margin=20)

    def header(self):
        if self.page_no() > 1:
            self.set_font("ko", "", 7)
            self.set_text_color(*GRAY)
            self.cell(0, 5, "SMASH 배드민턴 마켓 - 의뢰인 미팅 자료", align="R")
            self.ln(3)
            self.set_draw_color(*LIGHT_GRAY)
            self.line(10, self.get_y(), 200, self.get_y())
            self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font("ko", "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 10, f"- {self.page_no()} -", align="C")

    def write_title(self, text):
        self.set_font("ko", "B", 20)
        self.set_text_color(*BLACK)
        self.multi_cell(0, 10, text)
        self.set_draw_color(*BLACK)
        self.line(10, self.get_y() + 2, 200, self.get_y() + 2)
        self.ln(8)

    def write_meta(self, text):
        self.set_font("ko", "", 9)
        self.set_text_color(*GRAY)
        self.cell(0, 5, text)
        self.ln(5)

    def write_h2(self, text):
        self.ln(6)
        if self.get_y() > 255:
            self.add_page()
        self.set_fill_color(248, 248, 240)
        self.set_draw_color(*LIME)
        self.set_font("ko", "B", 14)
        self.set_text_color(*BLACK)
        y = self.get_y()
        self.rect(10, y, 190, 10, style="F")
        self.line(10, y + 10, 200, y + 10)
        self.cell(0, 10, f"  {text}")
        self.ln(14)

    def write_h3(self, text):
        self.ln(4)
        if self.get_y() > 265:
            self.add_page()
        self.set_draw_color(*LIME)
        y = self.get_y()
        self.line(10, y, 10, y + 7)
        self.set_font("ko", "B", 11)
        self.set_text_color(*DARK)
        self.cell(0, 7, f"   {text}")
        self.ln(9)

    def write_h4(self, text):
        self.ln(2)
        self.set_font("ko", "B", 10)
        self.set_text_color(68, 68, 68)
        self.cell(0, 6, text)
        self.ln(8)

    def write_paragraph(self, text):
        self.set_font("ko", "", 9)
        self.set_text_color(*DARK)
        # bold 처리
        parts = re.split(r'\*\*(.+?)\*\*', text)
        for i, part in enumerate(parts):
            if i % 2 == 1:
                self.set_font("ko", "B", 9)
                self.write(5, part)
                self.set_font("ko", "", 9)
            else:
                self.write(5, part)
        self.ln(6)

    def write_quote(self, text):
        self.set_fill_color(*QUOTE_BG)
        self.set_draw_color(*LIME)
        text = text.lstrip("> ").replace("> ", "")
        # 굵은 텍스트 제거
        clean = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
        w = self.get_string_width(clean) + 20
        lines = max(1, int(w / 170) + 1)
        h = lines * 5 + 6
        y = self.get_y()
        if y + h > 277:
            self.add_page()
            y = self.get_y()
        self.rect(10, y, 190, h, style="F")
        self.line(10, y, 10, y + h)
        self.set_xy(14, y + 3)
        self.set_font("ko", "", 8)
        self.set_text_color(85, 85, 85)
        self.multi_cell(180, 5, clean)
        self.set_y(y + h + 3)

    def write_table(self, headers, rows):
        if self.get_y() > 240:
            self.add_page()
        n_cols = len(headers)
        available_w = 190
        col_widths = [available_w / n_cols] * n_cols

        # 헤더 콘텐츠 길이 기반으로 폭 조정
        total_len = sum(max(len(h), 4) for h in headers)
        col_widths = [available_w * max(len(h), 4) / total_len for h in headers]

        # 최소 폭 보장
        min_w = 18
        for i in range(len(col_widths)):
            if col_widths[i] < min_w:
                col_widths[i] = min_w

        # 다시 정규화
        total = sum(col_widths)
        col_widths = [w * available_w / total for w in col_widths]

        # 헤더
        self.set_font("ko", "B", 8)
        self.set_fill_color(*TH_BG)
        self.set_text_color(*WHITE)
        for i, h in enumerate(headers):
            self.cell(col_widths[i], 7, f" {h}", border=0, fill=True)
        self.ln()

        # 데이터
        self.set_font("ko", "", 8)
        for row_idx, row in enumerate(rows):
            if self.get_y() > 272:
                self.add_page()
                # 재헤더
                self.set_font("ko", "B", 8)
                self.set_fill_color(*TH_BG)
                self.set_text_color(*WHITE)
                for i, h in enumerate(headers):
                    self.cell(col_widths[i], 7, f" {h}", border=0, fill=True)
                self.ln()
                self.set_font("ko", "", 8)

            if row_idx % 2 == 0:
                self.set_fill_color(*EVEN_ROW)
            else:
                self.set_fill_color(*WHITE)
            self.set_text_color(*DARK)
            self.set_draw_color(*LIGHT_GRAY)

            for i, cell_text in enumerate(row):
                cell_text = re.sub(r'\*\*(.+?)\*\*', r'\1', cell_text)
                w = col_widths[i] if i < len(col_widths) else col_widths[-1]
                self.cell(w, 6, f" {cell_text}", border="B", fill=True)
            self.ln()
        self.ln(4)

    def write_bullet(self, text, indent=0):
        self.set_font("ko", "", 9)
        self.set_text_color(*DARK)
        x = 14 + indent * 6
        self.set_x(x)
        # 체크박스 스타일
        if text.startswith("[ ] "):
            self.cell(5, 5, "[ ]")
            text = text[4:]
        elif text.startswith("[x] "):
            self.cell(5, 5, "[v]")
            text = text[4:]
        else:
            self.cell(5, 5, "-")

        clean = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
        self.multi_cell(170 - indent * 6, 5, clean)
        self.ln(1)

    def write_code_block(self, text):
        if self.get_y() > 250:
            self.add_page()
        self.set_fill_color(30, 30, 30)
        lines = text.split("\n")
        h = len(lines) * 4.5 + 8
        y = self.get_y()
        self.rect(10, y, 190, h, style="F")
        self.set_font("ko", "", 7)
        self.set_text_color(212, 212, 212)
        self.set_xy(14, y + 4)
        for line in lines:
            self.cell(0, 4.5, line)
            self.ln(4.5)
            self.set_x(14)
        self.set_y(y + h + 4)


def parse_table(lines, start_idx):
    """테이블 파싱: 헤더, 구분선, 데이터 행"""
    headers = [c.strip() for c in lines[start_idx].strip("|").split("|")]
    rows = []
    i = start_idx + 2  # 구분선 건너뛰기
    while i < len(lines) and "|" in lines[i] and not lines[i].startswith("#"):
        row = [c.strip() for c in lines[i].strip("|").split("|")]
        rows.append(row)
        i += 1
    return headers, rows, i


def main():
    with open(INPUT_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    lines = content.split("\n")
    pdf = MeetingPDF()
    pdf.add_page()

    i = 0
    in_code_block = False
    code_lines = []

    while i < len(lines):
        line = lines[i]

        # 코드 블록
        if line.startswith("```"):
            if in_code_block:
                pdf.write_code_block("\n".join(code_lines))
                code_lines = []
                in_code_block = False
            else:
                in_code_block = True
            i += 1
            continue

        if in_code_block:
            code_lines.append(line)
            i += 1
            continue

        # 빈 줄
        if not line.strip():
            i += 1
            continue

        # 구분선
        if line.strip() == "---":
            i += 1
            continue

        # 제목
        if line.startswith("# ") and not line.startswith("## "):
            pdf.write_title(line[2:].strip())
            i += 1
            continue

        if line.startswith("## "):
            pdf.write_h2(line[3:].strip())
            i += 1
            continue

        if line.startswith("### "):
            pdf.write_h3(line[4:].strip())
            i += 1
            continue

        if line.startswith("#### "):
            pdf.write_h4(line[5:].strip())
            i += 1
            continue

        # 테이블
        if "|" in line and i + 1 < len(lines) and re.match(r'^\|[\s\-:|]+\|', lines[i + 1]):
            headers, rows, next_i = parse_table(lines, i)
            pdf.write_table(headers, rows)
            i = next_i
            continue

        # 인용
        if line.startswith(">"):
            quote_text = line.lstrip("> ")
            i += 1
            while i < len(lines) and lines[i].startswith(">"):
                quote_text += " " + lines[i].lstrip("> ")
                i += 1
            pdf.write_quote(quote_text)
            continue

        # 리스트
        if re.match(r'^- \[[ x]\] ', line):
            pdf.write_bullet(line[2:].strip())
            i += 1
            continue

        if line.startswith("- "):
            pdf.write_bullet(line[2:].strip())
            i += 1
            continue

        if re.match(r'^\d+\. ', line):
            text = re.sub(r'^\d+\. ', '', line)
            pdf.write_bullet(text.strip())
            i += 1
            continue

        # 메타 정보 (> **작성일:** 등)
        if line.startswith("> **"):
            pdf.write_meta(re.sub(r'[>*]', '', line).strip())
            i += 1
            continue

        # 일반 텍스트
        if line.strip():
            pdf.write_paragraph(line.strip())

        i += 1

    pdf.output(OUTPUT_PATH)
    print(f"PDF 생성 완료: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
