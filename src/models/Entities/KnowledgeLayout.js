//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';

export class KnowledgeLayout extends EntityBase {
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;

  static fromApiEntity(apiKnowledgeLayout:KnowledgeLayoutType): KnowledgeLayout {
    let knowledgeLayout = new KnowledgeLayout();
    knowledgeLayout.id = apiKnowledgeLayout.id;
    knowledgeLayout.detailsLayout = apiKnowledgeLayout.detailsLayout;
    knowledgeLayout.tabLayout = apiKnowledgeLayout.tabLayout;
    if (apiKnowledgeLayout.tutorial) knowledgeLayout.tutorial = Tutorial.fromApiEntity(apiKnowledgeLayout.tutorial);

    return knowledgeLayout;
  }
}

export default KnowledgeLayout;

export type KnowledgeLayoutType = {
  id: number,
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;
}

