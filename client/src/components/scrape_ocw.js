const cheerio = require("cheerio")
const axios = require("axios")

// Citations
// https://stackoverflow.com/questions/65114035/err-insufficient-resources-errors-on-axios-get-request-in-react


axios.get("https://ocw.mit.edu/courses/find-by-department/").then(urlResponse => {
    const $ = cheerio.load(urlResponse.data);


    $("ul.deptList").each((i, element) => {
        const link = $(element)
        .find("a").attr("href");
    })
    
})