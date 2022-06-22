

   
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
            "https://sheetsu.com/apis/v1.0lw/020b2c0f/"

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
  