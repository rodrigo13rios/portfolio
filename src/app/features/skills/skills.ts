import { Component } from '@angular/core';
import { Skill } from '../../core/models/skill.model';
import { SKILLS } from '../../core/data/skills.data';

interface SkillGroup {
  title: string;
  skills: Skill[];
}
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
 protected readonly groups: SkillGroup[] = [
    { title: 'Frontend', skills: SKILLS.filter((s) => s.category === 'frontend') },
    { title: 'Backend', skills: SKILLS.filter((s) => s.category === 'backend') },
    { title: 'Herramientas', skills: SKILLS.filter((s) => s.category === 'tools') },
  ];
}
