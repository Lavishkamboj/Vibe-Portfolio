 // Skill bar fill fluctuation
 if(window.innerWidth<930){

   alert("Better to open in tab or Laptop bcz its not much optimized for smaller devices")
 }
    document.querySelectorAll('.progress-fill').forEach(bar => {
      const base = parseInt(bar.dataset.base, 10);
      setInterval(() => {
        const jitter = Math.random() * 11 - 5;
        const width = Math.max(0, Math.min(100, base + jitter));
        bar.style.width = width + '%';
      }, 1000);
    });

    // Skill % fluctuation
    const skillPercents = document.querySelectorAll('#skills .skill-name span:last-child');
    skillPercents.forEach(span => {
      const base = parseInt(span.textContent.replace('%', ''));
      setInterval(() => {
        const fluctuation = Math.floor(Math.random() * 11) - 5;
        const newVal = Math.max(0, Math.min(100, base + fluctuation));
        span.textContent = `${newVal}%`;
      }, 100 + Math.random() * 1000);
    });

    // Terminal behavior
    const input = document.getElementById('fakeCommandInput');
    const output = document.getElementById('consoleOutput');

    const contactResponses = {
      "getcontact": [
        "Searching public directory...",
        "Found 3 entries:",
        "📧 Email: lavishkamboj16@gmail.com",
        "🔗 GitHub: https://github.com/Lavishkamboj",
        "🔗 LinkedIn: www.linkedin.com/in/lavish-kamboj-993b74347"
      ],
      "help": [
        "Available commands:",
        " - getContact",
        " - help",
        " - clear"
      ],
      "clear": []
    };

    function printToConsole(lines) {
      lines.forEach((line, index) => {
        setTimeout(() => {
          const div = document.createElement('div');
          div.className = 'terminal-line output';
          div.textContent = line;
          output.appendChild(div);
          output.scrollTop = output.scrollHeight;
        }, index * 400);
      });
    }

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = input.value.trim().toLowerCase();
        const echo = document.createElement('div');
        echo.className = 'terminal-line';
        echo.innerHTML = `<span class="prompt">C:\\CONTACT&gt;</span> <span class="command">${input.value}</span>`;
        output.appendChild(echo);

        if (cmd === 'clear') {
          output.innerHTML = '';
        } else if (contactResponses[cmd]) {
          printToConsole(contactResponses[cmd]);
        } else {
          printToConsole(["Error: Unknown command. Try 'help'."]);
        }

        input.value = '';
      }
    });

    //another script file cde

      // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
       
        
        // Animate progress bars when they come into view
      
        // Add some terminal-like interactions
        document.querySelectorAll('.control-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.classList.contains('close')) {
                    alert('System cannot be terminated while portfolio is running!');
                } else if (this.classList.contains('minimize')) {
                    alert('Minimizing would interrupt your browsing experience!');
                } else {
                    alert('Portfolio is already maximized for optimal viewing!');
                }
            });
        });
        
        // Update status bar time
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            const timeElement = document.querySelector('.status-right span:last-child');
            if (timeElement) {
                timeElement.textContent = timeString;
            }
        }
        
        updateTime();
        setInterval(updateTime, 60000); // Update every minute
        
        // Add typing effect to certain elements
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
        
        // Boot sequence simulation
        window.addEventListener('load', function() {
            setTimeout(() => {
                const bootMessages = [
                    'Loading system drivers...',
                    'Initializing graphics display...',
                    'Mounting file systems...',
                    'Starting network services...',
                    'Portfolio system ready!'
                ];
                
                // You can add these messages to a boot screen if desired
                console.log('=== SYSTEM BOOT SEQUENCE ===');
                bootMessages.forEach((msg, index) => {
                    setTimeout(() => {
                        console.log(msg);
                    }, index * 500);
                });
            }, 1000);
        });
        
        // Easter egg: Konami code
        let konamiCode = [];
        const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
        
        document.addEventListener('keydown', function(e) {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.length === konamiSequence.length && 
                konamiCode.every((code, index) => code === konamiSequence[index])) {
                alert('🎮 CHEAT CODE ACTIVATED! 🎮\nDeveloper mode unlocked!\nYou found the secret!');
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = '';
                }, 3000);
            }
        });