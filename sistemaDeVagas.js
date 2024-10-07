const vacancy = []
let indiceVacancy = ""
let selectedVacancy = ""
let menuOption = ""

function menu() {
    return menuOption = prompt("1) Vagas disponíveis \n" +
        "2) Criar Nova Vaga \n" + 
        "3) Visualizar uma vaga\n" + 
        "4) Inscrever candidato em uma vaga \n" + 
        "5) Excluir Vaga \n" + 
        "6) Sair"
    )
}

function NewVacancy() {
        const addNewVacancy = {
            vacancyName : prompt("Nome da vaga:"),
            description : prompt("Descrição da vaga: "),
            dateLimit : prompt ("Até que data a vaga ficará disponível? "),
            candidate : []      
        }

        let confirmResult = confirm(
            "Gostaria de criar uma nova vaga com as seguintes informações: \n" + 
            "Nome da vaga: " + addNewVacancy.vacancyName + "\n" +
            "Descrição da vaga: " + addNewVacancy.description + "\n" + 
            "Data limite para candidatura: " + addNewVacancy.dateLimit 
        )
        
        if (confirmResult) {
            vacancy.push(addNewVacancy)
            alert("Vaga adicionada com sucesso!")
        } else {
            alert("Retornando ao menu...")
        }
        
    return {addNewVacancy, confirmResult}
    
}


function candidate() {
    
    let candidateName = prompt("Digite o nome do candidato: ")
    candidateName += "\n"
     indiceVacancy = prompt("Qual o Indice da vaga desejada?")
        
        if (indiceVacancy >=0 && indiceVacancy < vacancy.length) {
            const selectedVacancy = vacancy[indiceVacancy]
            const confirmResult = confirm (
                "Você está se Inscrevendo na Seguinte vaga: \n" + 
                "Nome da vaga: " + selectedVacancy.vacancyName + "\n" +
                "Descrição da vaga: " + selectedVacancy.description + "\n" + 
                "Data limite para Candidatura: " + selectedVacancy.dateLimit + "\n\n" + 
                "Gostaria de Confirmar a Inscrição ?"
            )
            
            if (confirmResult) {
                selectedVacancy.candidate.push(candidateName)
                alert("Inscrição realizada com sucesso!")
            } else {
                alert("Inscrição cancelada.")
            }
         } else {
            alert("Indice de vaga Inválido. Verifique o número da vaga.")
        }
}

function deleteVacancy() {
   indiceVacancy = prompt("Digite o indice da vaga que deseja excluir: ")

   if (indiceVacancy >=0 && indiceVacancy < vacancy.length) {
    selectedVacancy = vacancy[indiceVacancy]
    const confirmResult = confirm (
        "Você está Excluindo a seguinte vaga: \n" + 
        "Nome da vaga: " + selectedVacancy.vacancyName + "\n" +
        "Descrição da vaga: " + selectedVacancy.description + "\n" + 
        "Data limite para Candidatura: " + selectedVacancy.dateLimit + "\n\n" +  
        "Quantidade de candidatos Inscritos na vaga: " + selectedVacancy.candidate.length + "\n" +

        "Gostaria de Confirmar a Exclusão ?"
        )
        if (confirmResult) {
            vacancy.splice(selectedVacancy, 1)
            alert("vaga excluida com sucesso!")
        }
    
    } else {
    alert("Indice de vaga Inválido. Verifique o número da vaga.")
}
}

function viewVacancy() {
    indiceVacancy = parseFloat(prompt("qual o indice da vaga que deseja visualizar ?"))
    if (indiceVacancy >= vacancy.length || indiceVacancy < 0) {
        alert("indice inválido")
    } else {
        selectedVacancy = vacancy[indiceVacancy]
        alert(
            "Indice da vaga: " + indiceVacancy + "\n" + 
            "Vaga: " + selectedVacancy.vacancyName + "\n" +
            "Descrição: " + selectedVacancy.description + "\n" + 
            "Data limite: " + selectedVacancy.dateLimit + "\n" + 
            "Quantidade de candidatos inscritos: " + selectedVacancy.candidate.length + "\n" + 
            "Candidatos: \n" + selectedVacancy.candidate
        )
    }
}

function listVacancy() {
    if (menuOption === "1" && vacancy.length >= 0) {
        let vacancyList = "Vagas disponíveis: \n"
        for (let i = 0; i < vacancy.length; i++) {
            vacancyList += "Indice " + i + " : " + vacancy[i].vacancyName + "\n" +
            "Quantidade de candidatos inscritos: " + vacancy[i].candidate.length + "\n"
        }
        alert(vacancyList)
    }
}

function execute() {
    let option = ""

    do {
        option = menu()
        
        switch (option) {
            case "1":
             listVacancy()
             break
            case "2":
             NewVacancy()
             break
            case "3":
             viewVacancy()
             break
            case "4":
             candidate()
             break
            case "5":
             deleteVacancy()
             break
            case "6":
             alert("saindo...")
             break
            default:
             alert("Opção Invalida.")
         
        }
    
    } while (menuOption !== "6")

}

execute()
