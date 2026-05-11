 document.getElementById("btnplus").addEventListener("click", increaseCount);
        document.getElementById("btnminus").addEventListener("click", decreaseCount);
        document.getElementById("btnreset").addEventListener("click", resetCount);

        let count = 0;

        function updateCount() {
            document.getElementById("count").innerHTML = count;
        }

        function increaseCount() {
            count++;
            localStorage.setItem("count", count);
            updateCount();

            setTimeout(function () {
                document.getElementById("popup").style.display = "block";
            }, 300);
        }

        function decreaseCount() {
            if (count > 0)
                count--;

            localStorage.setItem("count", count);
            updateCount();
        }

        function resetCount() {
            count = 0;
            localStorage.setItem("count", count);
            updateCount();
        }

        window.onload = function () {
            let saved = localStorage.getItem("count");

            if (saved !== null) {
                count = Number(saved);
            }

            updateCount();
        }

        const box = document.getElementById("box");
        const colorBtn = document.getElementById("colorBtn");

        colorBtn.addEventListener("click", function () {
            box.style.backgroundColor = "blue";
        });

        document.getElementById("okBtn").addEventListener("click", function () {
            document.getElementById("popup").style.display = "none";
        });