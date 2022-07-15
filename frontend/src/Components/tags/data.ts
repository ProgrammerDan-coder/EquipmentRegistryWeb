export interface TagsOption {
    readonly value: string;
    readonly label: string;


  }
  
  export const tagsOptions: readonly TagsOption[] = [
    { value: 'physics', label: 'Физика' },
    { value: 'optics', label :'Оптика'},
    { value: 'chemistry', label :'Химия'},
    { value: 'biology', label :'Биология'},
  ];
  