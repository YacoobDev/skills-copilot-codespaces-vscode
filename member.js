function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = memberValue.split(",");
    var memberSkillsText = memberText.split(",");
    var skillsOptions = skills.options;
    for (var i = 0; i < skillsOptions.length; i++) {
        skillsOptions[i].selected = false;
        for (var j = 0; j < memberSkills.length; j++) {
            if (skillsOptions[i].value == memberSkills[j]) {
                skillsOptions[i].selected = true;
            }
        }
    }
}