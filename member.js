function skillsMember() { 
return {
    restrict: `E`,
    templateUrl: `modules/skills/views/member.html`,
    controller: SkillsMemberController,
    controlleAs: `vm`,
    bindToController: true,
    scope:{
        member: '='
    } 
};
}

