import os
import re

# ตั้งค่า path โฟลเดอร์โปรเจค
PROJECT_PATH = './'  # หรือเปลี่ยนเป็น path จริงที่ clone repo มา

def check_navbar_in_html(filename):
    with open(filename, encoding="utf-8") as f:
        content = f.read()
    report = []

    # 1. เช็คชื่อ lnw007 Trader
    if 'lnw007 Trader' in content:
        report.append('[OK] มีชื่อ lnw007 Trader')
    else:
        report.append('[ERR] ขาดชื่อ lnw007 Trader')

    # 2. เช็คปุ่ม Login
    if re.search(r'class\s*=\s*["\']btn btn-login["\']', content) or 'btn-login' in content:
        report.append('[OK] มีปุ่ม Login')
    else:
        report.append('[ERR] ขาดปุ่ม Login (btn-login)')

    # 3. เช็คปุ่ม Get Info
    if 'Get Info' in content:
        report.append('[OK] มีปุ่ม Get Info')
    else:
        report.append('[ERR] ขาดปุ่ม Get Info')

    # 4. เช็คเมนู Graph
    if re.search(r'>Graph<', content, re.IGNORECASE):
        report.append('[OK] มีเมนู Graph')
    else:
        report.append('[ERR] ขาดเมนู Graph')

    # 5. เช็คเมนู TraderX เดิมหรือปุ่ม Get Info ซ้ำ
    old_nav = False
    if 'TraderX' in content and 'lnw007 Trader' not in content:
        report.append('[WARN] ยังมี TraderX (nav เก่า)')
        old_nav = True
    # ปุ่ม Get Info ซ้ำ (2 ที่)
    if content.count('Get Info') > 1:
        report.append('[WARN] พบปุ่ม Get Info มากกว่า 1 ตำแหน่ง (อาจซ้ำ)')

    return report, old_nav

def scan_all_html_files():
    for root, dirs, files in os.walk(PROJECT_PATH):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                print(f'\n--- {path} ---')
                report, old_nav = check_navbar_in_html(path)
                for line in report:
                    print(line)
                if not old_nav and all(r.startswith('[OK]') for r in report):
                    print('=> ไฟล์นี้ถูกต้อง ✅')
                else:
                    print('=> มีจุดต้องแก้ไข ⚠️')

if __name__ == '__main__':
    scan_all_html_files()
