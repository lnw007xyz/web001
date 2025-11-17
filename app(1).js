// Exam data - Complete 13 exam sets with 50 questions each
const examData = {
  exams: [
    {
      id: 1,
      title: "ชุดที่ 1",
      questions: [
        {
          id: 1,
          text: "เครื่องหมายนี้ หมายความอย่างไร ?",
          options: [
            { label: "A", text: "ทางข้างหน้าโค้งไปทางขวา" },
            { label: "B", text: "ทางข้างหน้าโค้งกลับเริ่มขวา" },
            { label: "C", text: "ทางข้างหน้าโค้งซ้าย" },
            { label: "D", text: "ทางข้างหน้าโค้งรัศมีแคบเลี้ยวซ้าย" }
          ],
          correct: "C"
        },
        {
          id: 2,
          text: "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถด้วยความเร็ว เพื่อเข้าโค้งจะได้ไม่เสียการทรงตัว" },
            { label: "B", text: "ให้ขับรถช้าลง ทางข้างหน้าเป็นทางโค้งไปทางซ้าย" },
            { label: "C", text: "ให้ขับรถช้าลง และให้ขับรถชิดด้านซ้ายด้วยความระมัดระวัง" },
            { label: "D", text: "ให้ขับรถช้าลง ทางข้างหน้าเป็นทางโค้งรัศมีแคบไปทางขวา" }
          ],
          correct: "B"
        },
        {
          id: 3,
          text: "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถช้าลงขับรถไปตามทางโค้งกลับรัศมีแคบเริ่มซ้าย" },
            { label: "B", text: "ขับรถให้ช้าลงชิดซ้ายด้วยความระมัดระวัง ทางข้างหน้าเป็นทางคดเคี้ยวเริ่มซ้าย" },
            { label: "C", text: "ให้ขับรถช้าลง และชิดขวา ขับรถไปตามทางคดเคี้ยวเริ่มซ้าย" },
            { label: "D", text: "ให้ขับรถช้าลง และชิดซ้าย ขับรถไปตามทางโค้งกลับรัศมีแคบเริ่มขวา" }
          ],
          correct: "B"
        },
        {
          id: 4,
          text: "ข้อใดกล่าวถูกต้อง",
          options: [
            { label: "A", text: "เครื่องหมายเตือนทางแคบด้านซ้ายหมายความว่า ถนนข้างหน้าแคบลงด้านซ้าย" },
            { label: "B", text: "เครื่องหมายเตือนทางแคบด้านขวาหมายความว่า ถนนข้างหน้าแคบลงด้านขวา" },
            { label: "C", text: "เครื่องหมายเตือนทางแคบทั้งสองด้านหมายความว่า ถนนข้างหน้าแคบทั้งสองด้าน" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 5,
          text: "เมื่อพบเครื่องหมายเตือนข้างหน้ามีทางเข้าจากทางข้าง ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ชะลอความเร็วและเพิ่มความระมัดระวัง" },
            { label: "B", text: "ขับรถให้ระมัดระวังเพราะอาจจะมีรถจากทางข้างเข้ามารวมทาง" },
            { label: "C", text: "ขับรถให้ระมัดระวังเพราะอาจมีคนข้าม" },
            { label: "D", text: "ถูกทั้ง ก และ ข" }
          ],
          correct: "D"
        },
        {
          id: 6,
          text: "เมื่อเจอเครื่องหมายเตือนแยกทางขึ้นข้างหน้า ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ต้องขับรถชิดซ้ายตามที่ต้องการไป" },
            { label: "B", text: "ให้ชะลอความเร็วและเพิ่มความระมัดระวัง" },
            { label: "C", text: "ให้เร่งความเร็วก่อนออกจากทางหลวง" },
            { label: "D", text: "ให้แตรบอกสัญญาณแล้วเลี้ยวเข้าไป" }
          ],
          correct: "B"
        },
        {
          id: 7,
          text: "เมื่อพบเครื่องหมายเตือนสะพานข้างหน้า ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถแซงรถคันหน้าก่อนขึ้นสะพาน" },
            { label: "B", text: "ให้ชะลอความเร็วเพื่อความปลอดภัย" },
            { label: "C", text: "ขับรถด้วยความเร็วเพื่อเข้าสะพาน" },
            { label: "D", text: "ให้ขับตามหลังรถคันหน้าชิดๆ" }
          ],
          correct: "B"
        },
        {
          id: 8,
          text: "เครื่องหมายเตือนทางลื่นมีความหมายอย่างไร",
          options: [
            { label: "A", text: "บริเวณข้างหน้าเป็นทางลื่น" },
            { label: "B", text: "ผู้ขับขี่ควรเพิ่มความระมัดระวัง" },
            { label: "C", text: "ผู้ขับขี่ควรชะลอความเร็วหรืองดการแซงรถ" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 9,
          text: "เมื่อพบเครื่องหมายเตือนทางลาดชันข้างหน้าจากข้อใดกล่าวถูกต้อง",
          options: [
            { label: "A", text: "ต้องแจ้งให้คนข้างทางทราบว่าจะมีทางลาดชัน" },
            { label: "B", text: "ให้ขับรถชิดซ้ายด้วยความระมัดระวัง" },
            { label: "C", text: "ให้ชะลอความเร็วมีการใช้เบรคบ่อยๆ" },
            { label: "D", text: "ถูกทั้งข้อ ข และ ค" }
          ],
          correct: "D"
        },
        {
          id: 10,
          text: "เมื่อขับรถมาพบเครื่องหมายเตือนทางลาดขึ้นชัน 8% ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ลดเกียร์ก่อนขึ้นหรือลงเนิน" },
            { label: "B", text: "ให้ลดเกียร์ให้เหมาะสมเมื่อขึ้นหรือลงเนิน" },
            { label: "C", text: "อาจต้องใช้เกียร์ต่ำและชะลอความเร็ว" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 11,
          text: "เครื่องหมายเตือนทางข้างหน้าลงเนินชัน มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายสามเหลี่ยมก้านชี้ลง" },
            { label: "B", text: "ป้ายสามเหลี่ยมก้านชี้ขึ้น" },
            { label: "C", text: "ป้ายสามเหลี่ยมก้านชี้ตรง" },
            { label: "D", text: "ป้ายสามเหลี่ยมก้านแยกทาง" }
          ],
          correct: "A"
        },
        {
          id: 12,
          text: "เครื่องหมายเตือนทางแบ่งออกหมายความว่าอย่างไร",
          options: [
            { label: "A", text: "ทางข้างหน้าแบ่งออกเป็นสองทาง" },
            { label: "B", text: "ผู้ขับขี่ควรระมัดระวังและลดความเร็ว" },
            { label: "C", text: "ผู้ขับขี่อาจเลือกทางด้านซ้ายหรือด้านขวาก็ได้" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 13,
          text: "เมื่อพบเครื่องหมายเตือนจุดสิ้นสุดถนนสองเลนเป็นถนนเลนเดียวกลับ ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถชิดซ้ายด้วยความระมัดระวัง" },
            { label: "B", text: "ให้ลดความเร็วและชะลอลง" },
            { label: "C", text: "ต้องชิดซ้ายและให้โอกาสรถที่มาจากขวามือรวมทางก่อน" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 14,
          text: "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถช้าลงเพื่อความปลอดภัย" },
            { label: "B", text: "ให้ขับรถระมัดระวังเพราะข้างหน้าเป็นบริเวณที่คนหรือเด็กๆข้ามถนนบ่อย" },
            { label: "C", text: "ให้ขับรถระวังเพราะอาจมีเด็กนักเรียนแล่นออกมาตัดหน้ารถ" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 15,
          text: "เมื่อพบเครื่องหมายเตือนทางโล่งข้างหน้า ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ชะลอความเร็วและเพิ่มความระมัดระวัง" },
            { label: "B", text: "ให้เร่งความเร็วเพราะเป็นทางโล่ง" },
            { label: "C", text: "ให้ขับรถในความเร็วที่สุจริตไม่สร้างความเดือดร้อน" },
            { label: "D", text: "ถูกข้อ ก และ ค" }
          ],
          correct: "D"
        },
        {
          id: 16,
          text: "เครื่องหมายจราจรนี้หมายความอย่างไร",
          options: [
            { label: "A", text: "ห้ามรถเกวียน" },
            { label: "B", text: "ห้ามรถกระบะ" },
            { label: "C", text: "ห้ามรถบรรทุก" },
            { label: "D", text: "ทุกข้อผิด" }
          ],
          correct: "C"
        },
        {
          id: 17,
          text: "เครื่องหมายจราจรห้ามรถเข็น ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ห้ามรถเข็นของทุกประเภทเข้าไปในบริเวณนั้น" },
            { label: "B", text: "ห้ามรถเข็นขายของผลไม้" },
            { label: "C", text: "ห้ามรถเข็นทั่วไปที่ใช้แรงคน" },
            { label: "D", text: "ถูกข้อ ก และ ค" }
          ],
          correct: "D"
        },
        {
          id: 18,
          text: "เครื่องหมายจราจรห้ามเลี้ยวขวา ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ถ้าไม่มีเจ้าหน้าที่อยู่สามารถเลี้ยวขวาได้" },
            { label: "B", text: "ขับรถให้ช้าลงและเลี้ยวขวาได้ด้วยความระมัดระวัง" },
            { label: "C", text: "ห้ามเลี้ยวขวา" },
            { label: "D", text: "ให้ชะลอความเร็วก่อนเลี้ยวขวา" }
          ],
          correct: "C"
        },
        {
          id: 19,
          text: "เมื่อพบเครื่องหมายห้ามเลี้ยวกลับรถ ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ห้ามเลี้ยวกลับรถภายในบริเวณนั้น" },
            { label: "B", text: "ถ้าต้องการกลับรถให้ขับรถไปจนถึงจุดที่กฎหมายอนุญาต" },
            { label: "C", text: "ถ้าไม่มีเจ้าหน้าที่จราจรอยู่สามารถเลี้ยวกลับรถได้" },
            { label: "D", text: "ถูกข้อ ก และ ข" }
          ],
          correct: "D"
        },
        {
          id: 20,
          text: "เมื่อพบเครื่องหมายห้ามแซง ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ห้ามแซงรถคันหน้าภายในบริเวณนั้น" },
            { label: "B", text: "หากมีความจำเป็นสามารถแซงรถคันหน้าได้" },
            { label: "C", text: "ห้ามแซงรถคันหน้าเว้นแต่รถคันหน้าจอดหรือหยุด" },
            { label: "D", text: "ถูกทั้งข้อ ก และ ค" }
          ],
          correct: "D"
        },
        {
          id: 21,
          text: "เมื่อพบเครื่องหมายห้ามใช้สัญญาณเสียง ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ห้ามใช้แตรบริเวณนั้น เว้นแต่เพื่อความปลอดภัย" },
            { label: "B", text: "ห้ามใช้แตรบริเวณนั้น แม้ว่าจะเป็นเพื่อความปลอดภัยก็ตาม" },
            { label: "C", text: "สามารถใช้แตรได้ถ้าไม่มีเจ้าหน้าที่อยู่" },
            { label: "D", text: "สามารถใช้แตรได้ในกรณีที่รถคันหน้าขับช้า" }
          ],
          correct: "A"
        },
        {
          id: 22,
          text: "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้หยุดรถตรงเส้นที่กำหนด" },
            { label: "B", text: "ให้ทุกคันเคลื่อนรถเข้าไปในทางแยกได้ทีละคัน" },
            { label: "C", text: "ให้สังเกตรถที่มาจากทิศทางอื่นๆ" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 23,
          text: "เครื่องหมายจราจรที่ใช้บังคับว่าให้หยุดรถคือข้อใด",
          options: [
            { label: "A", text: "เครื่องหมายให้หยุดรถตรงเส้นที่กำหนดหรือบริเวณทางแยก" },
            { label: "B", text: "เครื่องหมายให้ชะลอความเร็วหยุดรถให้รถที่มาจากทางอื่นออกไปก่อน" },
            { label: "C", text: "เครื่องหมายหยุดเมื่อมีคนข้าม" },
            { label: "D", text: "ถูกเฉพาะข้อ ก และ ข" }
          ],
          correct: "D"
        },
        {
          id: 24,
          text: "เครื่องหมายจราจรสีเหลืองห้ามจอด หมายความว่าอย่างไร",
          options: [
            { label: "A", text: "ห้ามรถทุกชนิดจอดตามวัน เวลา ที่กำหนดไว้ในบริเวณนั้น" },
            { label: "B", text: "ห้ามจอดเฉพาะรถปิคอัพเท่านั้น" },
            { label: "C", text: "สามารถจอดรถบริเวณนั้นได้" },
            { label: "D", text: "ถูกข้อ ข และ ค" }
          ],
          correct: "A"
        },
        {
          id: 25,
          text: "เครื่องหมายจราจรห้ามหยุดรถ หมายความว่าอย่างไร",
          options: [
            { label: "A", text: "ห้ามรถทุกชนิดหยุดตามวัน เวลา ที่กำหนดไว้ในบริเวณนั้น" },
            { label: "B", text: "เว้นแต่รถที่หยุดเพื่อให้คนขึ้นหรือลงหรือยกของขึ้นหรือลง" },
            { label: "C", text: "สามารถหยุดรถบริเวณนั้นได้ไม่เกิน 5 นาที" },
            { label: "D", text: "ถูกข้อ ก และ ข" }
          ],
          correct: "D"
        },
        {
          id: 26,
          text: "เครื่องหมายจราจรบังคับให้ขับรถเลี้ยวซ้าย มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้เลี้ยวซ้าย" },
            { label: "B", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ตรง" },
            { label: "C", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้เลี้ยวขวา" },
            { label: "D", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ตรงและเลี้ยวซ้าย" }
          ],
          correct: "A"
        },
        {
          id: 27,
          text: "เมื่อเห็นป้ายจราจรบังคับให้ขับรถไปทางซ้าย ผู้ขับขี่ต้องปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ต้องขับรถเลี้ยวซ้าย" },
            { label: "B", text: "ต้องขับรถเลี้ยวขวา" },
            { label: "C", text: "ต้องขับรถตรงไป" },
            { label: "D", text: "ขับรถได้ทั้งตรงไปและเลี้ยวซ้าย" }
          ],
          correct: "A"
        },
        {
          id: 28,
          text: "เครื่องหมายจราจรบังคับให้ขับรถไปทางขวา หรือตรงไป มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ตรงและเลี้ยวขวา" },
            { label: "B", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ตรงและเลี้ยวซ้าย" },
            { label: "C", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ตรงไป" },
            { label: "D", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้เลี้ยวขวา" }
          ],
          correct: "A"
        },
        {
          id: 29,
          text: "เมื่อพบเครื่องหมายจราจรนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถตรงไป" },
            { label: "B", text: "ให้ขับรถเลี้ยวขวา" },
            { label: "C", text: "ให้ขับรถเลี้ยวซ้าย" },
            { label: "D", text: "ให้ขับรถตรงไปหรือเลี้ยวขวา" }
          ],
          correct: "D"
        },
        {
          id: 30,
          text: "เครื่องหมายจราจรบังคับให้ขับรถข้ามทางแยกไม่ได้ มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้สองทางแยกออกจากกัน" },
            { label: "B", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้เลี้ยวขวา" },
            { label: "C", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้เลี้ยวซ้าย" },
            { label: "D", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ตรงไป" }
          ],
          correct: "A"
        },
        {
          id: 31,
          text: "เมื่อพบเครื่องหมายจราจรบังคับให้ขับรถเข้าวงเวียน ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถชิดซ้ายและขับรถตามวงเวียน" },
            { label: "B", text: "ให้ขับรถตามวงเวียนไปทางขวา" },
            { label: "C", text: "ให้ขับรถวนเวียนไปทางซ้าย" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "B"
        },
        {
          id: 32,
          text: "เครื่องหมายจราจรบังคับให้ขับรถชิดด้านขวาของเกาะกลางทาง มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ขวาเอียง" },
            { label: "B", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ซ้ายเอียง" },
            { label: "C", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้ตรงไป" },
            { label: "D", text: "ป้ายกลมพื้นสีฟ้ามีลูกศรชี้เลี้ยวขวา" }
          ],
          correct: "A"
        },
        {
          id: 33,
          text: "เมื่อพบเครื่องหมายจราจรบังคับให้ขับรถชิดด้านซ้ายของเกาะกลางทาง ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถชิดซ้ายของเกาะกลางทาง" },
            { label: "B", text: "ให้ขับรถชิดขวาของเกาะกลางทาง" },
            { label: "C", text: "ให้ขับรถตรงข้ามเกาะกลางทาง" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "A"
        },
        {
          id: 34,
          text: "เครื่องหมายจราจรบังคับให้เดินรถทางเดียวทางขวา มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีฟ้ามีลูกศรชี้ขึ้น" },
            { label: "B", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีฟ้ามีลูกศรชี้ลง" },
            { label: "C", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีฟ้ามีลูกศรชี้ไปทางขวา" },
            { label: "D", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีฟ้ามีลูกศรชี้ไปทางซ้าย" }
          ],
          correct: "C"
        },
        {
          id: 35,
          text: "เมื่อพบเครื่องหมายจราจรนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ขับรถในทิศทางตามที่กำหนดไว้" },
            { label: "B", text: "ต้องไม่ขับรถย้อนศร" },
            { label: "C", text: "เป็นทางเดินรถทางเดียว" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 36,
          text: "เครื่องหมายแนะนำแสดงชื่อทาง มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีเขียวมีเส้นขาวล้อมรอบขอบ" },
            { label: "B", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีน้ำเงินมีเส้นขาวล้อมรอบขอบ" },
            { label: "C", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีแดงมีเส้นขาวล้อมรอบขอบ" },
            { label: "D", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีเหลืองมีเส้นดำล้อมรอบขอบ" }
          ],
          correct: "A"
        },
        {
          id: 37,
          text: "เครื่องหมายจราจรแนะนำแสดงทิศทาง มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายลูกศรพื้นสีเขียวมีเส้นขาวล้อมรอบขอบ" },
            { label: "B", text: "ป้ายลูกศรพื้นสีน้ำเงินมีเส้นขาวล้อมรอบขอบ" },
            { label: "C", text: "ป้ายลูกศรพื้นสีแดงมีเส้นขาวล้อมรอบขอบ" },
            { label: "D", text: "ป้ายลูกศรพื้นสีเหลืองมีเส้นดำล้อมรอบขอบ" }
          ],
          correct: "A"
        },
        {
          id: 38,
          text: "เครื่องหมายจราจรบอกตำแหน่งที่ตั้ง มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีเขียวมีเส้นขาวล้อมรอบขอบ" },
            { label: "B", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีน้ำเงินมีเส้นขาวล้อมรอบขอบ" },
            { label: "C", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีแดงมีเส้นขาวล้อมรอบขอบ" },
            { label: "D", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีเหลืองมีเส้นดำล้อมรอบขอบ" }
          ],
          correct: "B"
        },
        {
          id: 39,
          text: "เครื่องหมายแนะนำระยะทาง มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีเขียวมีเส้นขาวล้อมรอบขอบ" },
            { label: "B", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีน้ำเงินมีเส้นขาวล้อมรอบขอบ" },
            { label: "C", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีแดงมีเส้นขาวล้อมรอบขอบ" },
            { label: "D", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีเหลืองมีเส้นดำล้อมรอบขอบ" }
          ],
          correct: "B"
        },
        {
          id: 40,
          text: "เครื่องหมายแนะนำเลขทางหลวง มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายรูปหยดน้ำกลับหัวพื้นสีขาวล้อมขอบสีแดง" },
            { label: "B", text: "ป้ายรูปหยดน้ำกลับหัวพื้นสีขาวล้อมขอบสีฟ้า" },
            { label: "C", text: "ป้ายรูปหยดน้ำกลับหัวพื้นสีขาวล้อมขอบสีเขียว" },
            { label: "D", text: "ป้ายรูปหยดน้ำกลับหัวพื้นสีขาวล้อมขอบสีเหลือง" }
          ],
          correct: "A"
        },
        {
          id: 41,
          text: "เครื่องหมายจราจรแนะนำทางเลี้ยงเมือง มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายลูกศรพื้นสีเขียวมีเส้นขาวล้อมรอบขอบ" },
            { label: "B", text: "ป้ายลูกศรพื้นสีน้ำเงินมีเส้นขาวล้อมรอบขอบ" },
            { label: "C", text: "ป้ายลูกศรพื้นสีแดงมีเส้นขาวล้อมรอบขอบ" },
            { label: "D", text: "ป้ายลูกศรพื้นสีเหลืองมีเส้นดำล้อมรอบขอบ" }
          ],
          correct: "D"
        },
        {
          id: 42,
          text: "ข้อใดกล่าวถูกต้องเกี่ยวกับเครื่องหมายจราจรแนะนำชั่วคราว",
          options: [
            { label: "A", text: "เป็นเครื่องหมายแนะนำต่างๆบนทางหลวง" },
            { label: "B", text: "เป็นป้ายที่ใช้กับเครื่องหมายเตือนและเครื่องหมายบังคับ" },
            { label: "C", text: "มีลักษณะป้ายสี่เหลี่ยมผืนผ้าพื้นสีส้มมีอักษรสีดำ" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 43,
          text: "เครื่องหมายจราจรชั่วคราวที่ใช้บอกเหตุ มีลักษณะอย่างไร",
          options: [
            { label: "A", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีส้มมีอักษรสีดำ" },
            { label: "B", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีฟ้ามีอักษรสีขาว" },
            { label: "C", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีเขียวมีอักษรสีขาว" },
            { label: "D", text: "ป้ายสี่เหลี่ยมผืนผ้าพื้นสีแดงมีอักษรสีขาว" }
          ],
          correct: "A"
        },
        {
          id: 44,
          text: "การใช้สายสะท้อนแสงสีแดงและสีขาวสลับกันเพื่อกั้นหรือปิดทาง หมายความว่าอย่างไร",
          options: [
            { label: "A", text: "เพื่อเตือนให้ผู้ใช้ทางทราบว่ากำลังมีการปิดการจราจร" },
            { label: "B", text: "ห้ามรถทุกชนิดผ่านเข้าไปในบริเวณที่กั้น" },
            { label: "C", text: "เพื่อเตือนให้ผู้ใช้ทางระมัดระวังขับรถผ่าน" },
            { label: "D", text: "ถูกข้อ ก และ ข" }
          ],
          correct: "D"
        },
        {
          id: 45,
          text: "การใช้สายสะท้อนแสงสีเหลืองและสีดำสลับกันเพื่อกั้นบริเวณที่เป็นอันตราย มีความหมายอย่างไร",
          options: [
            { label: "A", text: "เพื่อเตือนให้ผู้ขับขี่ระมัดระวัง" },
            { label: "B", text: "เพื่อบอกให้ผู้ใช้ทางทราบว่ากำลังซ่อมแซมถนน" },
            { label: "C", text: "บริเวณนั้นเป็นที่อันตรายต้องหลีกเลี่ยง" },
            { label: "D", text: "ถูกข้อ ก และ ค" }
          ],
          correct: "D"
        },
        {
          id: 46,
          text: "การใช้กรวยจราจรหรือเสาจราจร มีความหมายอย่างไร",
          options: [
            { label: "A", text: "เพื่อเตือนและบังคับทิศทางการจราจร" },
            { label: "B", text: "ใช้กับการซ่อมแซมถนนหรือเหตุการณ์พิเศษอื่นๆ" },
            { label: "C", text: "ควรปฏิบัติตามทิศทางที่กำหนดไว้" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 47,
          text: "ไฟสัญญาณจราจรสีเขียวหมายความว่าอย่างไร",
          options: [
            { label: "A", text: "ให้รถวิ่งผ่านไปได้" },
            { label: "B", text: "ให้รถทุกคันผ่านไปได้" },
            { label: "C", text: "ให้รถวิ่งผ่านไปได้แต่ต้องระมัดระวังรถที่อยู่ในทางแยกหรือคนข้ามถนน" },
            { label: "D", text: "ถูกข้อ ก และ ค" }
          ],
          correct: "D"
        },
        {
          id: 48,
          text: "เมื่อพบไฟสัญญาณจราจรสีเหลือง ผู้ขับขี่ควรปฏิบัติอย่างไร",
          options: [
            { label: "A", text: "ให้ผู้ขับขี่ระมัดระวังเพราะจะมีไฟแดงตามมา" },
            { label: "B", text: "ถ้ารถยังไม่ถึงแนวหยุดรถต้องหยุดรถ" },
            { label: "C", text: "ถ้ารถเข้าไปใกล้แนวหยุดรถแล้วให้รีบผ่านไป" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 49,
          text: "ไฟสัญญาณจราจรสีแดงหมายความว่าอย่างไร",
          options: [
            { label: "A", text: "ห้ามรถทุกคันผ่านเข้าไป" },
            { label: "B", text: "ให้รถทุกคันหยุดตรงแนวหยุดรถ" },
            { label: "C", text: "ให้รถทุกคันหยุดและรอไฟเขียว" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        },
        {
          id: 50,
          text: "ไฟเขียวกะพริบหมายความว่าอย่างไร",
          options: [
            { label: "A", text: "ให้ระมัดระวังเพราะจะมีไฟเหลืองตามมา" },
            { label: "B", text: "ถ้ารถยังไม่ถึงแนวหยุดรถให้ระลอความเร็วลงหรือหยุดรอ" },
            { label: "C", text: "ถ้ารถเข้าใกล้แนวหยุดรถแล้วให้รีบผ่านไป" },
            { label: "D", text: "ถูกทุกข้อ" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: 2,
      title: "ชุดที่ 2",
      questions: [
        { id: 1, text: "ชุดที่ 2 - ข้อ 1", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 2, text: "ชุดที่ 2 - ข้อ 2", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 3, text: "ชุดที่ 2 - ข้อ 3", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 4, text: "ชุดที่ 2 - ข้อ 4", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 5, text: "ชุดที่ 2 - ข้อ 5", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 6, text: "ชุดที่ 2 - ข้อ 6", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 7, text: "ชุดที่ 2 - ข้อ 7", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 8, text: "ชุดที่ 2 - ข้อ 8", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 9, text: "ชุดที่ 2 - ข้อ 9", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 10, text: "ชุดที่ 2 - ข้อ 10", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 11, text: "ชุดที่ 2 - ข้อ 11", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 12, text: "ชุดที่ 2 - ข้อ 12", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 13, text: "ชุดที่ 2 - ข้อ 13", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 14, text: "ชุดที่ 2 - ข้อ 14", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 15, text: "ชุดที่ 2 - ข้อ 15", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 16, text: "ชุดที่ 2 - ข้อ 16", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 17, text: "ชุดที่ 2 - ข้อ 17", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 18, text: "ชุดที่ 2 - ข้อ 18", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 19, text: "ชุดที่ 2 - ข้อ 19", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 20, text: "ชุดที่ 2 - ข้อ 20", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 21, text: "ชุดที่ 2 - ข้อ 21", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 22, text: "ชุดที่ 2 - ข้อ 22", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 23, text: "ชุดที่ 2 - ข้อ 23", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 24, text: "ชุดที่ 2 - ข้อ 24", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 25, text: "ชุดที่ 2 - ข้อ 25", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 26, text: "ชุดที่ 2 - ข้อ 26", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 27, text: "ชุดที่ 2 - ข้อ 27", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 28, text: "ชุดที่ 2 - ข้อ 28", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 29, text: "ชุดที่ 2 - ข้อ 29", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 30, text: "ชุดที่ 2 - ข้อ 30", options: [{label: "A", text: "ัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 31, text: "ชุดที่ 2 - ข้อ 31", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 32, text: "ชุดที่ 2 - ข้อ 32", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 33, text: "ชุดที่ 2 - ข้อ 33", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 34, text: "ชุดที่ 2 - ข้อ 34", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 35, text: "ชุดที่ 2 - ข้อ 35", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 36, text: "ชุดที่ 2 - ข้อ 36", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 37, text: "ชุดที่ 2 - ข้อ 37", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 38, text: "ชุดที่ 2 - ข้อ 38", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 39, text: "ชุดที่ 2 - ข้อ 39", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 40, text: "ชุดที่ 2 - ข้อ 40", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 41, text: "ชุดที่ 2 - ข้อ 41", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 42, text: "ชุดที่ 2 - ข้อ 42", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 43, text: "ชุดที่ 2 - ข้อ 43", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 44, text: "ชุดที่ 2 - ข้อ 44", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 45, text: "ชุดที่ 2 - ข้อ 45", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 46, text: "ชุดที่ 2 - ข้อ 46", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" },
        { id: 47, text: "ชุดที่ 2 - ข้อ 47", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "C" },
        { id: 48, text: "ชุดที่ 2 - ข้อ 48", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "D" },
        { id: 49, text: "ชุดที่ 2 - ข้อ 49", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "A" },
        { id: 50, text: "ชุดที่ 2 - ข้อ 50", options: [{label: "A", text: "ตัวเลือก A"}, {label: "B", text: "ตัวเลือก B"}, {label: "C", text: "ตัวเลือก C"}, {label: "D", text: "ตัวเลือก D"}], correct: "B" }
      ]
    }
  ]
};

// Add remaining exam sets (3-13) with placeholder data
for (let i = 3; i <= 13; i++) {
  const title = i <= 10 ? `ชุดที่ ${i}` : `ทดสอบ ${i - 10}`;
  const questions = [];
  
  for (let j = 1; j <= 50; j++) {
    questions.push({
      id: j,
      text: `${title} - ข้อ ${j}`,
      options: [
        { label: "A", text: "ตัวเลือก A" },
        { label: "B", text: "ตัวเลือก B" },
        { label: "C", text: "ตัวเลือก C" },
        { label: "D", text: "ตัวเลือก D" }
      ],
      correct: ["A", "B", "C", "D"][j % 4]
    });
  }
  
  examData.exams.push({ id: i, title, questions });
}

// Application state
let currentExam = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let isAnswerMode = false;

// Initialize app
function init() {
  renderExamList();
}

// Render exam list on main menu
function renderExamList() {
  const examList = document.getElementById('examList');
  examList.innerHTML = '';
  
  examData.exams.forEach(exam => {
    const card = document.createElement('div');
    card.className = 'exam-card';
    card.innerHTML = `
      <h3>${exam.title}</h3>
      <p>50 ข้อ (ข้อ 1-50)</p>
    `;
    card.onclick = () => startExam(exam.id);
    examList.appendChild(card);
  });
}

// Start exam
function startExam(examId) {
  currentExam = examData.exams.find(e => e.id === examId);
  currentQuestionIndex = 0;
  userAnswers = {};
  isAnswerMode = false;
  
  showScreen('examScreen');
  renderQuestion();
}

// Render current question
function renderQuestion() {
  const question = currentExam.questions[currentQuestionIndex];
  const questionNumber = document.getElementById('questionNumber');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('options');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  questionNumber.textContent = `ข้อที่ ${currentQuestionIndex + 1}/50`;
  questionText.textContent = question.text;
  
  optionsContainer.innerHTML = '';
  optionsContainer.className = `options${isAnswerMode ? ' answer-mode' : ''}`;
  
  question.options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    
    const userAnswer = userAnswers[currentQuestionIndex + 1];
    if (userAnswer === option.label) {
      optionDiv.classList.add('selected');
    }
    
    if (isAnswerMode) {
      if (option.label === question.correct) {
        optionDiv.classList.add('correct');
      } else if (userAnswer === option.label && userAnswer !== question.correct) {
        optionDiv.classList.add('incorrect');
      }
    }
    
    optionDiv.innerHTML = `
      <div class="option-label">${option.label}</div>
      <div class="option-text">${option.text}</div>
    `;
    
    if (!isAnswerMode) {
      optionDiv.onclick = () => selectAnswer(option.label);
    }
    
    optionsContainer.appendChild(optionDiv);
  });
  
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === currentExam.questions.length - 1;
}

// Select answer
function selectAnswer(label) {
  userAnswers[currentQuestionIndex + 1] = label;
  renderQuestion();
}

// Navigate to previous question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Navigate to next question
function nextQuestion() {
  if (currentQuestionIndex < currentExam.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

// Check answers and show results
function checkAnswers() {
  isAnswerMode = true;
  let correctCount = 0;
  
  currentExam.questions.forEach((question, index) => {
    if (userAnswers[index + 1] === question.correct) {
      correctCount++;
    }
  });
  
  const percentage = ((correctCount / currentExam.questions.length) * 100).toFixed(1);
  
  document.getElementById('resultScore').textContent = `${correctCount}/${currentExam.questions.length}`;
  document.getElementById('resultPercentage').textContent = `${percentage}%`;
  
  const resultDetails = document.getElementById('resultDetails');
  resultDetails.innerHTML = '';
  
  currentExam.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index + 1] || '-';
    const isCorrect = userAnswer === question.correct;
    
    const item = document.createElement('div');
    item.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
    item.innerHTML = `
      <div class="result-icon">${isCorrect ? '✓' : '✗'}</div>
      <div class="result-text">
        <strong>ข้อที่ ${index + 1}</strong> - 
        ตอบ ${userAnswer} 
        ${isCorrect ? '<span style="color: var(--color-success);">ถูก</span>' : `<span style="color: var(--color-error);">ผิด (คำตอบที่ถูกคือ ${question.correct})</span>`}
      </div>
    `;
    resultDetails.appendChild(item);
  });
  
  showScreen('resultScreen');
}

// Back to menu
function backToMenu() {
  currentExam = null;
  currentQuestionIndex = 0;
  userAnswers = {};
  isAnswerMode = false;
  showScreen('menu');
}

// Show specific screen
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
}

// Start application
init();