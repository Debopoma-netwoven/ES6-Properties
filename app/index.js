function es6Properties(index) {
    let strCode = ``;
    var outputDiv = document.getElementById("Output");
    while (outputDiv.firstChild) {
        outputDiv.removeChild(outputDiv.firstChild);
    }
    var outputCode = document.getElementById("Code");
    while (outputCode.firstChild) {
        outputCode.removeChild(outputCode.firstChild);
    }
    switch (index) {
        case 1://Optional/Default Parameters
            {
                let link = function (height = 50, width = 50, color = 'red') {
                    var node = document.createElement("div");
                    node.style.height = height + 'px';
                    node.style.width = width + 'px';
                    node.style.backgroundColor = color;
                    node.style.marginTop = "2px";
                    node.style.marginLeft = "30%";
                    document.getElementById("Output").appendChild(node);
                }
                link(25, 75);
                link(30, 30, 'yellow');
                link();
                strCode = `
                let link = function (height = 50, width = 50, color = 'red') {
                    var node = document.createElement("div");
                    node.style.height = height;
                    node.style.width = width;
                    node.style.backgroundColor = color;
                    document.getElementById("Output").appendChild(node);
                }
                link(45, 50);
                link('yellow');
                link();
                `
                console.log('Optional/Default Parameters');
                break;
            }
        case 2://Template Literals
            {
                let firstName = document.createElement("input");
                firstName.type = "text";
                firstName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(firstName);
                let lastName = document.createElement("input");
                lastName.type = "text";
                lastName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(lastName);
                let btnName = document.createElement("button");
                btnName.innerHTML = "Print Name";
                btnName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(btnName);
                btnName.onclick = function () {
                    let txt1 = firstName.value;
                    let txt2 = lastName.value;
                    let name = `Your name is ${txt1} ${txt2}.`
                    let textName = document.createElement("div");
                    textName.innerHTML = name;
                    document.getElementById("Output").appendChild(textName);
                };

                var divOutput = document.createElement("div");
                strCode = `let firstName = document.createElement("input");
                            firstName.type = "text";
                            firstName.style.marginLeft = "5px";
                            document.getElementById("Output").appendChild(firstName);
                            let lastName = document.createElement("input");
                            lastName.type = "text";
                            lastName.style.marginLeft = "5px";
                            document.getElementById("Output").appendChild(lastName);
                            let btnName = document.createElement("button");
                            btnName.innerHTML = "Print Name";
                            btnName.style.marginLeft = "5px";
                            document.getElementById("Output").appendChild(btnName);
                            btnName.onclick = function () {
                                let txt1 = firstName.value;
                                let txt2 = lastName.value;
                                let name = 'Your name is \${txt1} \${txt2}.'
                                let textName = document.createElement("div");
                                textName.innerHTML = name;
                                document.getElementById("Output").appendChild(textName);
                            };

                            var divOutput = document.createElement("div");`
                console.log('Template Literals');
                break;
            }
        case 3://Multiline String
            {
                let roadPoem = `Then took the other, as just as fair,
                                And having perhaps the better claim
                                Because it was grassy and wanted wear,
                                Though as for that the passing there
                                Had worn them really about the same,`
                let poemDiv = document.createElement("div");
                poemDiv.innerHTML = roadPoem;
                document.getElementById("Output").appendChild(poemDiv);

                strCode = ` let roadPoem = \`Then took the other, as just as fair,
                            And having perhaps the better claim
                            Because it was grassy and wanted wear,
                            Though as for that the passing there
                            Had worn them really about the same,\`
                            document.getElementById("Output").appendChild(roadPoem);`

                console.log('Multiline String');
                break;
            }
        case 4://Spread Operator
            {
                let arr1 = ['two', 'three'];
                let arr2 = ['one', ...arr1, 'four', 'five'];


                let arrTable = document.createElement("table");
                arrTable.style.width = "100%";
                arrTable.style.marginLeft = "100px";
                let arrTr = document.createElement("tr");
                let arrTd1 = document.createElement("td");
                arrTd1.style.width = "200px";
                let arrTd2 = document.createElement("td");
                arrTd2.style.width = "200px";
                document.getElementById("Output").appendChild(arrTable);
                document.getElementById("Output").appendChild(arrTr);
                document.getElementById("Output").appendChild(arrTd1);
                document.getElementById("Output").appendChild(arrTd2);

                let arrDiv1 = document.createElement("div");
                arrDiv1.innerHTML = 'Print Array 1';
                arrTd1.appendChild(arrDiv1);
                for (let i = 0; i < arr1.length; i++) {
                    let arrLi = document.createElement("li");
                    arrLi.innerHTML = arr1[i];
                    arrTd1.appendChild(arrLi);
                }
                let arrDiv2 = document.createElement("div");
                arrDiv2.innerHTML = 'Print Array 2';
                arrTd2.appendChild(arrDiv2);
                for (let i = 0; i < arr2.length; i++) {
                    let arrLi = document.createElement("li");
                    arrLi.innerHTML = arr2[i];
                    arrTd2.appendChild(arrLi);
                }
                strCode = ` let arr1 = ['two', 'three'];
                let arr2 = ['one', ...arr1, 'four', 'five'];


                let arrTable = document.createElement("table");
                arrTable.style.width = "100%";
                arrTable.style.marginLeft = "100px";
                let arrTr = document.createElement("tr");
                let arrTd1 = document.createElement("td");
                arrTd1.style.width = "200px";
                let arrTd2 = document.createElement("td");
                arrTd2.style.width = "200px";
                document.getElementById("Output").appendChild(arrTable);
                document.getElementById("Output").appendChild(arrTr);
                document.getElementById("Output").appendChild(arrTd1);
                document.getElementById("Output").appendChild(arrTd2);

                let arrDiv1 = document.createElement("div");
                arrDiv1.innerHTML = 'Print Array 1';
                arrTd1.appendChild(arrDiv1);
                for (let i = 0; i < arr1.length; i++) {
                    let arrLi = document.createElement("li");
                    arrLi.innerHTML = arr1[i];
                    arrTd1.appendChild(arrLi);
                }
                let arrDiv2 = document.createElement("div");
                arrDiv2.innerHTML = 'Print Array 2';
                arrTd2.appendChild(arrDiv2);
                for (let i = 0; i < arr2.length; i++) {
                    let arrLi = document.createElement("li");
                    arrLi.innerHTML = arr2[i];
                    arrTd2.appendChild(arrLi);
                }`
                console.log('Spread Operator');
                break;
            }
        case 5://Destructuring Assignment
            {
                let a, b, rest;
                let mainArr = [10, 20, 30, 40, 50];
                let mainArrDiv = document.createElement("div");
                let str = "[";
                for (let i = 0; i < mainArr.length; i++) {
                    str = str + mainArr[i] + ',';
                }
                str = str + "]";
                mainArrDiv.innerHTML = str;
                document.getElementById("Output").appendChild(mainArrDiv);
                [a, b, ...rest] = mainArr;
                let aDiv = document.createElement("div");
                aDiv.innerHTML = a;
                document.getElementById("Output").appendChild(aDiv);
                let bDiv = document.createElement("div");
                bDiv.innerHTML = b;
                document.getElementById("Output").appendChild(bDiv);
                let restDiv = document.createElement("div");
                restDiv.innerHTML = rest;
                let strRest = "[";
                for (let i = 0; i < rest.length; i++) {
                    strRest = strRest + rest[i] + ',';
                }
                strRest = strRest + "]";
                restDiv.innerHTML = strRest;
                document.getElementById("Output").appendChild(restDiv);
                strCode = `let a,b,rest;
                let mainArr=[10,20,30,40,50];
                let mainArrDiv = document.createElement("div");
                let str="[";
                for (let i = 0; i < mainArr.length; i++) {
                    str= str +  mainArr[i] + ',' ;
                }
                str= str + "]";
                mainArrDiv.innerHTML = str;
                document.getElementById("Output").appendChild(mainArrDiv);
                [a,b,...rest] = mainArr;
                let aDiv = document.createElement("div");
                aDiv.innerHTML = a;
                document.getElementById("Output").appendChild(aDiv);
                let bDiv = document.createElement("div");
                bDiv.innerHTML = b;
                document.getElementById("Output").appendChild(bDiv);
                let restDiv = document.createElement("div");
                restDiv.innerHTML = rest;
                let strRest="[";
                for (let i = 0; i < rest.length; i++) {
                    strRest= strRest +  rest[i] + ',' ;
                }
                strRest= strRest + "]";
                restDiv.innerHTML = strRest;
                document.getElementById("Output").appendChild(restDiv);`
                console.log('Destructuring Assignment');
                break;
            }
        case 6://Enhanced Object Literals
            {
                let firstName = document.createElement("input");
                firstName.type = "text";
                firstName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(firstName);
                let lastName = document.createElement("input");
                lastName.type = "text";
                lastName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(lastName);
                let btnName = document.createElement("button");
                btnName.innerHTML = "Create Object";
                btnName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(btnName);
                btnName.onclick = function () {
                    let object = [firstName.value, lastName.value];

                    let textName = document.createElement("div");
                    let strName = "{";
                    for (let i = 0; i < object.length; i++) {
                        strName = strName + object[i] + ',';
                    }
                    strName = strName + "}";
                    textName.innerHTML = strName;
                    document.getElementById("Output").appendChild(textName);
                };

                strCode = `let firstName = document.createElement("input");
                firstName.type = "text";
                firstName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(firstName);
                let lastName = document.createElement("input");
                lastName.type = "text";
                lastName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(lastName);
                let btnName = document.createElement("button");
                btnName.innerHTML = "Create Object";
                btnName.style.marginLeft = "5px";
                document.getElementById("Output").appendChild(btnName);
                btnName.onclick = function () {
                    let object = [firstName.value,lastName.value];
                   
                    let textName = document.createElement("div");
                    let strName="{";
                    for (let i = 0; i < object.length; i++) {
                        strName= strName +  object[i] + ',' ;
                    }
                    strName= strName + "}";
                    textName.innerHTML = strName;
                    document.getElementById("Output").appendChild(textName);
                };`

                console.log('Enhanced Object Literals');
                break;
            }
        case 7://Lamda Expressions
            { 
                let count = document.createElement("div");

                let fn = function() {
                    this.i = 0;
                    setInterval(() => {
                        count.innerHTML = ++this.i;
                    }, 1000);
                }();
                document.getElementById("Output").appendChild(count);
                strCode =`let count = document.createElement("div");

                let fn = function() {
                    this.i = 0;
                    setInterval(() => {
                        count.innerHTML = ++this.i;
                    }, 1000);
                }();
                document.getElementById("Output").appendChild(count);`
                console.log('Lamda Expressions');
                break;
            }
        default:
            console.log('wrong index');
    }
    var textNode = document.createElement("div");
    textNode.innerHTML = strCode;
    document.getElementById("Code").appendChild(textNode);
}