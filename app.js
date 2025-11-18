// examData จะถูกโหลดจากไฟล์ examData2567.js ซึ่งถูกสร้างจากไฟล์ข้อสอบ HTML เดิม
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
  
  questionNumber.textContent = `ข้อที่ ${currentQuestionIndex + 1}/${currentExam.questions.length}`;
  // แสดงข้อความคำถาม
  questionText.textContent = '';
  const textNode = document.createElement('div');
  textNode.textContent = question.text;
  questionText.appendChild(textNode);
  // ถ้ามีรูปภาพจากต้นฉบับ ให้แสดงด้านล่างข้อความ (หากไฟล์รูปมีอยู่ในโฟลเดอร์เดียวกัน)
  if (question.image) {
    const img = document.createElement('img');
    img.src = question.image;
    img.alt = 'รูปภาพประกอบคำถาม';
    img.style.display = 'block';
    img.style.maxWidth = '100%';
    img.style.marginTop = '16px';
    questionText.appendChild(img);
  }
  
  optionsContainer.innerHTML = '';
  optionsContainer.className = `options${isAnswerMode ? ' answer-mode' : ''}`;
  
  question.options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    
    const userAnswer = userAnswers[currentQuestionIndex + 1];
    if (userAnswer === option.label) {
      optionDiv.classList.add('selected');
    }
    
    if (isAnswerMode && question.correct) {
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
  let totalWithKey = 0;

  // นับเฉพาะข้อที่มีการกำหนดเฉลย (question.correct ไม่เป็น null/undefined)
  currentExam.questions.forEach((question, index) => {
    if (question.correct) {
      totalWithKey++;
      if (userAnswers[index + 1] === question.correct) {
        correctCount++;
      }
    }
  });

  if (totalWithKey === 0) {
    alert("ยังไม่ได้กำหนดเฉลยสำหรับหมวดนี้ในระบบ\nโปรดเติมค่า field 'correct' ในไฟล์ examData2567.js ให้ครบทุกข้อ");
    return;
  }

  const percentage = ((correctCount / totalWithKey) * 100).toFixed(1);

  document.getElementById('resultScore').textContent = `${correctCount}/${totalWithKey}`;
  document.getElementById('resultPercentage').textContent = `${percentage}%`;

  const resultDetails = document.getElementById('resultDetails');
  resultDetails.innerHTML = '';

  currentExam.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index + 1] || '-';
    const hasKey = !!question.correct;
    const isCorrect = hasKey && userAnswer === question.correct;

    const item = document.createElement('div');
    item.className = 'result-item';
    item.innerHTML = `
      <div class="result-icon">${!hasKey ? '?' : (isCorrect ? '✓' : '✗')}</div>
      <div class="result-text">
        <strong>ข้อที่ ${index + 1}</strong> -
        ตอบ ${userAnswer}
        ${
          !hasKey
            ? '<span style="color: var(--color-text-secondary);"> (ยังไม่กำหนดเฉลย)</span>'
            : isCorrect
              ? '<span style="color: var(--color-success);"> ถูกต้อง</span>'
              : `<span style="color: var(--color-error);"> ผิด (คำตอบที่ถูกคือ ${question.correct})</span>`
        }
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