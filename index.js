


   
      async function submitForm(e) {
        try {
          e.preventDefault();

          const name = document.getElementById("name").value
          const email = document.getElementById("email").value

          const payload = {
            name,
            email
             }

          const url =
            "https://www.notion.so/992baa56baa74f00af8c7ba6613f759d?v=94447bda05e84c2d9cd6c7312ab5952e"

          const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
          }

          const res = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(payload),
          })

          const resBody = await res.json()

          console.log("RESPONSE FORM SERVER", resBody)

          setTimeout(() => {
            window.location.replace("https://www.instagram.com/ar/257599323225196/")
          }, 10000)
        } catch (e) {
          console.log("ERROR", e)
        }
      }
  