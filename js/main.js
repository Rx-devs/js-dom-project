const mileStonesData = JSON.parse(data).data;

// load course 
function loadMilestones() {
    const mileStones = document.querySelector('.milestones');
    mileStones.innerHTML = `${mileStonesData.map(function (milestone) {
        return `
        <div class="milestone border-b">
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" /></div>
                        <div>
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

loadMilestones();