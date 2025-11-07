// Quiz Games JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all Quiz Games (16 total: 2 per module)
    initAllQuizzes();
    
    // Quiz Games Logic
    function initAllQuizzes() {
        // Initialize all quiz games - 2 per module (a and b variants)
        const quizIds = [
            'quiz-1a', 'quiz-1b',
            'quiz-2a', 'quiz-2b', 
            'quiz-3a', 'quiz-3b',
            'quiz-4a', 'quiz-4b',
            'quiz-5a', 'quiz-5b',
            'quiz-6a', 'quiz-6b',
            'quiz-7a', 'quiz-7b',
            'quiz-8a', 'quiz-8b'
        ];
        
        quizIds.forEach(quizId => {
            initQuizGame(quizId);
        });
    }
    
    function initQuizGame(quizId) {
        const quizContainer = document.getElementById(quizId);
        if (!quizContainer) return;
        
        const optionBtns = quizContainer.querySelectorAll('.option-btn');
        const result = quizContainer.querySelector('.game-result');
        
        optionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const isCorrect = this.dataset.correct === 'true';
                
                optionBtns.forEach(btn => {
                    btn.disabled = true;
                    if (btn.dataset.correct === 'true') {
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('incorrect');
                    }
                });
                
                result.style.display = 'block';
                if (isCorrect) {
                    result.className = 'game-result success';
                    result.textContent = '🎉 Correct! Great understanding of the AI concept!';
                } else {
                    result.className = 'game-result error';
                    result.textContent = '❌ Not quite right. Review the video content and try to think about the key concepts.';
                }
                
                // Add visual feedback
                addVisualFeedback(this, isCorrect ? 'success' : 'error');
            });
        });
    }
    
    // Add visual feedback function
    function addVisualFeedback(element, type) {
        element.style.transition = 'all 0.3s ease';
        
        if (type === 'success') {
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 300);
        } else if (type === 'error') {
            element.style.transform = 'translateX(-10px)';
            setTimeout(() => {
                element.style.transform = 'translateX(10px)';
                setTimeout(() => {
                    element.style.transform = 'translateX(0)';
                }, 100);
            }, 100);
        }
    }
    
    // Add hover effects to all quiz buttons
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});