const mileStonesData = JSON.parse(data).data;

// load course 
function loadMilestones() {
    const mileStones = document.querySelector('.milestones');
    mileStones.innerHTML = `${mileStonesData.map(function (milestone) {
        return `
        <div class="milestone border-b" id="${milestone._id}">
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${milestone._id})" /></div>
                        <div onclick="openMilestone(this, ${milestone._id})">
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hidden_panel">
                        ${milestone.modules.map(function (module) {
                            return `
                            <div class="module border-b">
                            <p>${module.name}</p>
                        </div>
                        `
                        }).join("")}
                    </div>
                </div> 
        `
    }).join("")
        }`
}



function openMilestone(milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const showedPanel = document.querySelector('.show');
    (!currentPanel.classList.contains('show') && showedPanel) ? (showedPanel.classList.remove('show')) : null;
    currentPanel.classList.toggle('show');

    const activePanel = document.querySelector('.active');
    (activePanel && !milestoneElement.classList.contains('active')) ? (activePanel.classList.remove('active')) : null;
    milestoneElement.classList.toggle('active');

    showMilestone(id);

}

function showMilestone(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const milestoneTitle = document.querySelector(".module_title");
    const milestoneDetails = document.querySelector(".module_description");
    
    milestoneImage.style.opacity = "0";
    
    milestoneImage.src = mileStonesData[id].image;
    milestoneTitle.innerText = mileStonesData[id].name;
    milestoneDetails.innerText = mileStonesData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
    this.style.opacity = "1";
}

function markMilestone(checkbox, id) {
    const doneList = document.querySelector(".doneList");
    const milestoneList = document.querySelector(".milestones");

    const item = document.getElementById(id);

    if (checkbox.checked) {
        // mark as done
        milestoneList.removeChild(item);
        doneList.appendChild(item);
    } else {
        // back to main list
        milestoneList.appendChild(item);
        doneList.removeChild(item);

        // sorting the list by id - reload list
    }
}

loadMilestones();