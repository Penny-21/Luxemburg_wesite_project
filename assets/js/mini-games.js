// Mini Games JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Game 1: Quiz Game
    initQuizGame();
    
    // Game 2: Memory Game
    initMemoryGame();
    
    // Game 3: Word Scramble Game
    initWordGame();
    
    // Game 4: Click Game
    initClickGame();
    
    // Game 5: Match Game
    initMatchGame();
    
    // Game 6: Slider Game
    initSliderGame();
    
    // Game 7: True/False Game
    initTrueFalseGame();
    
    // Game 8: Sort Game
    initSortGame();
    
    // Quiz Game Logic
    function initQuizGame() {
        const quizContainer = document.getElementById('quiz-1');
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
                    result.textContent = '🎉 Correct! Intercultural understanding is key to global citizenship!';
                } else {
                    result.className = 'game-result error';
                    result.textContent = '❌ Not quite. Think about connecting with people from different cultures.';
                }
            });
        });
    }
    
    // Memory Game Logic
    function initMemoryGame() {
        const memoryContainer = document.getElementById('memory-1');
        if (!memoryContainer) return;
        
        const cards = memoryContainer.querySelectorAll('.memory-card');
        const result = memoryContainer.querySelector('.game-result');
        let flippedCards = [];
        let matchedPairs = 0;
        
        // Shuffle cards
        const cardArray = Array.from(cards);
        cardArray.sort(() => Math.random() - 0.5);
        cardArray.forEach((card, index) => {
            card.style.order = index;
        });
        
        cards.forEach(card => {
            card.addEventListener('click', function() {
                if (this.classList.contains('flipped') || this.classList.contains('matched') || flippedCards.length === 2) {
                    return;
                }
                
                this.classList.add('flipped');
                flippedCards.push(this);
                
                if (flippedCards.length === 2) {
                    setTimeout(() => {
                        const [card1, card2] = flippedCards;
                        if (card1.dataset.pair === card2.dataset.pair) {
                            card1.classList.add('matched');
                            card2.classList.add('matched');
                            matchedPairs++;
                            
                            if (matchedPairs === 3) {
                                result.style.display = 'block';
                                result.className = 'game-result success';
                                result.textContent = '🧠 Excellent memory! You matched all the global citizenship concepts!';
                            }
                        } else {
                            card1.classList.remove('flipped');
                            card2.classList.remove('flipped');
                        }
                        flippedCards = [];
                    }, 1000);
                }
            });
        });
    }
    
    // Word Scramble Game Logic
    function initWordGame() {
        const wordContainer = document.getElementById('word-1');
        if (!wordContainer) return;
        
        const input = wordContainer.querySelector('.word-input');
        const checkBtn = wordContainer.querySelector('.check-word-btn');
        const result = wordContainer.querySelector('.game-result');
        const correctWord = 'COMMUNITY';
        
        checkBtn.addEventListener('click', function() {
            const userAnswer = input.value.toUpperCase().trim();
            
            result.style.display = 'block';
            if (userAnswer === correctWord) {
                result.className = 'game-result success';
                result.textContent = '✨ Perfect! COMMUNITY is essential for global citizenship!';
                input.disabled = true;
                checkBtn.disabled = true;
            } else {
                result.className = 'game-result error';
                result.textContent = '🤔 Try again! Think about people working together...';
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkBtn.click();
            }
        });
    }
    
    // Click Game Logic
    function initClickGame() {
        const clickContainer = document.getElementById('click-1');
        if (!clickContainer) return;
        
        const target = clickContainer.querySelector('.click-target');
        const pointsSpan = clickContainer.querySelector('.points');
        const result = clickContainer.querySelector('.game-result');
        let points = 0;
        let gameActive = true;
        
        target.addEventListener('click', function() {
            if (!gameActive) return;
            
            points++;
            pointsSpan.textContent = points;
            
            // Add click animation
            this.style.transform = 'scale(0.8)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            if (points >= 10) {
                gameActive = false;
                result.style.display = 'block';
                result.className = 'game-result success';
                result.textContent = '🌱 Amazing! You\'ve grown a sustainable mindset with 10 green points!';
                target.style.cursor = 'default';
            }
        });
    }
    
    // Match Game Logic
    function initMatchGame() {
        const matchContainer = document.getElementById('match-1');
        if (!matchContainer) return;
        
        const items = matchContainer.querySelectorAll('.match-item');
        const result = matchContainer.querySelector('.game-result');
        let selectedItems = [];
        let matchedPairs = 0;
        
        items.forEach(item => {
            item.addEventListener('click', function() {
                if (this.classList.contains('matched') || this.classList.contains('selected')) {
                    return;
                }
                
                this.classList.add('selected');
                selectedItems.push(this);
                
                if (selectedItems.length === 2) {
                    const [item1, item2] = selectedItems;
                    
                    setTimeout(() => {
                        if (item1.dataset.match === item2.dataset.match) {
                            item1.classList.remove('selected');
                            item2.classList.remove('selected');
                            item1.classList.add('matched');
                            item2.classList.add('matched');
                            matchedPairs++;
                            
                            if (matchedPairs === 3) {
                                result.style.display = 'block';
                                result.className = 'game-result success';
                                result.textContent = '🎯 Excellent! You understand the connections between global citizenship concepts!';
                            }
                        } else {
                            item1.classList.remove('selected');
                            item2.classList.remove('selected');
                        }
                        selectedItems = [];
                    }, 800);
                }
            });
        });
    }
    
    // Slider Game Logic
    function initSliderGame() {
        const sliderContainer = document.getElementById('slider-1');
        if (!sliderContainer) return;
        
        const slider = sliderContainer.querySelector('.balance-slider');
        const submitBtn = sliderContainer.querySelector('.submit-balance-btn');
        const result = sliderContainer.querySelector('.game-result');
        
        submitBtn.addEventListener('click', function() {
            const value = parseInt(slider.value);
            
            result.style.display = 'block';
            
            if (value >= 40 && value <= 60) {
                result.className = 'game-result success';
                result.textContent = '⚖️ Perfect balance! Global awareness and local action work best together!';
            } else if (value < 40) {
                result.className = 'game-result error';
                result.textContent = '🌍 Consider expanding your global perspective while maintaining local focus!';
            } else {
                result.className = 'game-result error';
                result.textContent = '🏠 Don\'t forget the importance of local community action too!';
            }
            
            slider.disabled = true;
            submitBtn.disabled = true;
        });
    }
    
    // True/False Game Logic
    function initTrueFalseGame() {
        const tfContainer = document.getElementById('tf-1');
        if (!tfContainer) return;
        
        const tfBtns = tfContainer.querySelectorAll('.tf-btn');
        const result = tfContainer.querySelector('.game-result');
        
        tfBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const answer = this.dataset.answer;
                const isCorrect = answer === 'false';
                
                tfBtns.forEach(btn => {
                    btn.disabled = true;
                    if (btn.dataset.answer === 'false') {
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('incorrect');
                    }
                });
                
                result.style.display = 'block';
                if (isCorrect) {
                    result.className = 'game-result success';
                    result.textContent = '✅ Correct! Civic engagement is important at all levels - local, national, and global!';
                } else {
                    result.className = 'game-result error';
                    result.textContent = '❌ Actually, civic engagement matters at local, national, AND global levels!';
                }
            });
        });
    }
    
    // Sort Game Logic
    function initSortGame() {
        const sortContainer = document.getElementById('sort-1');
        if (!sortContainer) return;
        
        const sortList = sortContainer.querySelector('.sortable-list');
        const items = sortContainer.querySelectorAll('.sort-item');
        const checkBtn = sortContainer.querySelector('.check-order-btn');
        const result = sortContainer.querySelector('.game-result');
        
        // Shuffle items initially
        const itemsArray = Array.from(items);
        itemsArray.sort(() => Math.random() - 0.5);
        itemsArray.forEach(item => sortList.appendChild(item));
        
        // Make items draggable
        items.forEach(item => {
            item.draggable = true;
            
            item.addEventListener('dragstart', function(e) {
                this.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', this.outerHTML);
                e.dataTransfer.setData('text/plain', this.dataset.order);
            });
            
            item.addEventListener('dragend', function() {
                this.classList.remove('dragging');
            });
        });
        
        sortList.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            const dragging = sortContainer.querySelector('.dragging');
            const afterElement = getDragAfterElement(sortList, e.clientY);
            
            if (afterElement == null) {
                sortList.appendChild(dragging);
            } else {
                sortList.insertBefore(dragging, afterElement);
            }
        });
        
        sortList.addEventListener('drop', function(e) {
            e.preventDefault();
        });
        
        checkBtn.addEventListener('click', function() {
            const currentOrder = Array.from(sortList.children).map(item => item.dataset.order);
            const correctOrder = ['1', '2', '3', '4'];
            
            result.style.display = 'block';
            if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
                result.className = 'game-result success';
                result.textContent = '🎯 Perfect order! You understand the sustainable development process!';
                items.forEach(item => {
                    item.draggable = false;
                    item.style.cursor = 'default';
                });
                checkBtn.disabled = true;
            } else {
                result.className = 'game-result error';
                result.textContent = '🔄 Try again! Think about the logical sequence of problem-solving steps.';
            }
        });
        
        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.sort-item:not(.dragging)')];
            
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }
    }
    
    // Add some fun animations and sound effects (visual feedback only)
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
    
    // Add hover effects to all game buttons
    const allButtons = document.querySelectorAll('.option-btn, .check-word-btn, .submit-balance-btn, .tf-btn, .check-order-btn');
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