import Select from '@awsui/components-react/select';
import { ReactElement } from 'react';
import LANGUAGE_OPTIONS from '../../constants/language-options';
import useLanguageSelect from './language-select.hook';

export default function LanguageSelect(): ReactElement {
  const { handleChange, selectedOption } = useLanguageSelect();

  return (
    <Select
      onChange={handleChange}
      options={LANGUAGE_OPTIONS}
      selectedOption={selectedOption}
    />
  );
}
