 function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function updateDashboard() {
           // 
            let heartRate = getRandom(60, 140); 
            let sysBP = getRandom(110, 160);    
            let diaBP = getRandom(70, 95);     
            let temp = (Math.random() * (39 - 36) + 36).toFixed(1); 
            let spo2 = getRandom(88, 100);      
          
            document.getElementById('hr').innerText = heartRate;
            document.getElementById('bp').innerText = `${sysBP}/${diaBP}`;
            document.getElementById('temp').innerText = temp;
            document.getElementById('spo2').innerText = spo2;

          
            let isCritical = false;

          
            if (heartRate > 110) {
                document.getElementById('hr').classList.add('danger');
                isCritical = true;
            } else {
                document.getElementById('hr').classList.remove('danger');
            }

          
            if (sysBP > 140) {
                document.getElementById('bp').classList.add('danger');
                isCritical = true;
            } else {
                document.getElementById('bp').classList.remove('danger');
            }

       
            if (temp > 38.0) {
                document.getElementById('temp').classList.add('danger');
                isCritical = true;
            } else {
                document.getElementById('temp').classList.remove('danger');
            }

           
            if (spo2 < 92) {
                document.getElementById('spo2').classList.add('danger');
                isCritical = true;
            } else {
                document.getElementById('spo2').classList.remove('danger');
            }

            let alertBanner = document.getElementById('hospital-alert');
            if (isCritical) {
                alertBanner.style.display = 'block';
                
            } else {
                alertBanner.style.display = 'none';
            }
        }

       
        setInterval(updateDashboard, 2000);

       
        updateDashboard();
