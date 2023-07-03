import { component$ } from '@builder.io/qwik';

export interface DateInputProps {
  selectDay?: string;
}
export const DateInput = component$((props: DateInputProps) => {
  const selectDay =
    props.selectDay ||
    `${new Date().toISOString().slice(0, 10)}`;
    
  return <>
    <p>{selectDay}</p>
    <input type='date' value={selectDay} />
  </>;
});
