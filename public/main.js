const xml = new XMLHttpRequest()
btn.onclick = () => {
    xml.open('GET', '/style.css')
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status >= 200 && xml < 300) {
                const style = document.createElement('style')
                style.innerHTML = xml.response
                document.head.appendChild(style)
            } else {
                alert("请求 CSS 失败!")
            }
        }

    }
    xml.send()
}
getJS.onclick = () => {
    xml.open('GET', '/2.js')
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status >= 200 && xml.status < 300) {
                const script = document.createElement("script")
                script.innerHTML = xml.response
                document.body.appendChild(script)
            } else {
                alert("请求 JS 失败!")
            }
        }
    }
    xml.send()
}
getHTML.onclick = () => {
    xml.open('GET', '/3.html')
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status >= 200 && xml.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = xml.response
                document.body.appendChild(div)
            } else {
                alert("请求 HTML 失败!")
            }
        }
    }
    xml.send()
}
getXML.onclick = () => {
    xml.open('GET', '/4.xml')
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status >= 200 && xml.status < 300) {
                const dom = xml.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            } else {
                alert("请求 XML 失败!")
            }
        }
    }
    xml.send()
}
getJSON.onclick = () => {
    xml.open("GET", "/5.json")
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status >= 200 && xml.status < 300) {
                const object = JSON.parse(xml.response)
                myName.textContent = object.name
            } else {
                alert("请求 JSON 失败!")
            }
        }
    }
    xml.send()
}
let n = 1;
getPage.onclick = () => {
    xml.open("GET", `/page${n+=1}`)
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status >= 200 & xml.status < 300) {
                const arr = JSON.parse(xml.response)
                const ul = document.createElement('ul')
                arr.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    ul.appendChild(li)
                })
                pages.appendChild(ul)
            } else {
                alert('请求错误!')
            }
        }
    }
    xml.send()
}