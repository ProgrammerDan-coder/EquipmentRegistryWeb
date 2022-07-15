export interface DepTagsOption {
    readonly value: string;
    readonly label: string;


  }
  
  export const DeptagsOptions: readonly DepTagsOption[] = [
    { value: 'value1', label: 'Список оборудования кафедры химической переработки древесины, применяемого для научных исследований и испытаний' },
    { value: 'optics', label :'Оптика'},
    { value: 'chemistry', label :'Химия'},
    { value: 'biology', label :'Биология'},
  ];
  