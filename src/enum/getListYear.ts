import { IDropdownList } from '@/components/Dropdown';

const yearToday = new Date().getFullYear();
const listYear: IDropdownList[] = [];

for (let i = yearToday; i >= 1883; i--) {
  listYear.push({
    label: i.toString(),
    value: i.toString(),
  });
}
export default listYear;
