const canvas = document.getElementById("clock");
        const context = canvas.getContext("2d");
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 10;

        function drawClock() {
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the clock face
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            context.fillStyle = "rgb(245, 245, 245, 0)";
            context.fill();
            context.lineWidth = 2;
            context.strokeStyle = "rgb(51, 51, 51, 0)";
            context.stroke();

            // Draw the clock center
            context.beginPath();
            context.arc(centerX, centerY, 5, 0, 2 * Math.PI);
            context.fillStyle = "#333";
            context.fill();

            // Get the current time
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Draw the hour hand
            const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
            drawHand(hourAngle, radius * 0.5, 6);

            // Draw the minute hand
            const minuteAngle = minutes * 6 + (seconds / 60) * 6;
            drawHand(minuteAngle, radius * 0.7, 4);

            // Draw the second hand
            const secondAngle = seconds * 6;
            drawHand(secondAngle, radius * 0.7, 1, "red");
        }

        function drawHand(angle, length, width, color = "#333") {
            context.save();
            context.translate(centerX, centerY);
            context.rotate((angle - 90) * (Math.PI / 180));
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(length, 0);
            context.strokeStyle = color;
            context.lineWidth = width;
            context.lineCap = "round";
            context.stroke();
            context.restore();
        }

        // Update the clock every second
        setInterval(drawClock, 1000);
        
        // Initial drawing
        drawClock();