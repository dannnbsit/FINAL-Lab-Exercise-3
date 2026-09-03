  // =========================
        // GET REQUEST
        // =========================

        document.getElementById("loadData").addEventListener("click", function () {

            const output = document.getElementById("output");

            output.innerHTML = "Loading...";

            fetch("https://jsonplaceholder.typicode.com/posts/1")

                .then(response => {

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    return response.json();
                })

                .then(data => {

                    output.innerHTML = `
                    <strong>Post Title:</strong> ${data.title}
                    <br><br>
                    <strong>Content:</strong> ${data.body}
                `;

                })

                .catch(error => {

                    output.innerHTML =
                        `<span style="color:red;">
                        Error: ${error.message}
                    </span>`;

                });

        });


        // =========================
        // POST REQUEST
        // =========================

        document.getElementById("createPost").addEventListener("click", function () {

            const output = document.getElementById("output");

            output.innerHTML = "Creating post...";

            fetch("https://jsonplaceholder.typicode.com/posts", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "My New Post",
                    body: "Learning Fetch API is fun!",
                    userId: 1
                })

            })

                .then(response => {

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    return response.json();

                })

                .then(data => {

                    output.innerHTML = `
                <strong style="color:green;">
                    New Post Created!
                </strong>

                <br><br>

                <strong>Post ID:</strong> ${data.id}
            `;

                })

                .catch(error => {

                    output.innerHTML =
                        `<span style="color:red;">
                    Error: ${error.message}
                </span>`;

                });

        });
