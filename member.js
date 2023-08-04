function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsBtn = document.getElementById("member-skills-btn");
    var memberSkillsBtnIcon = document.getElementById("member-skills-btn-icon");
    var memberSkillsBtnText = document.getElementById("member-skills-btn-text");

    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsBtn.style.backgroundColor = "#fff";
        memberSkillsBtn.style.color = "#000";
        memberSkillsBtnIcon.style.color = "#000";
        memberSkillsBtnText.style.color = "#000";
    } else {
        memberSkills.style.display = "none";
        memberSkillsBtn.style.backgroundColor = "#000";
        memberSkillsBtn.style.color = "#fff";
        memberSkillsBtnIcon.style.color = "#fff";
        memberSkillsBtnText.style.color = "#fff";
    }
}