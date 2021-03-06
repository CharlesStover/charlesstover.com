import { TableProps } from '@awsui/components-react/table';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { ReactElement, useMemo } from 'react';
import ExplicitDownloads from '../../components/packages-table-explicit-downloads-cell';
import PackageName from '../../components/packages-table-name-cell';
import TotalDownloads from '../../components/packages-table-total-downloads-cell';
import PackagesTableItem from '../../types/packages-table-item';

interface Props {
  filteringText: string;
}

export default function useColumnDefinitions({
  filteringText,
}: Props): TableProps.ColumnDefinition<PackagesTableItem>[] {
  const translate: TranslateFunction = useTranslate();

  return useMemo(
    (): TableProps.ColumnDefinition<PackagesTableItem>[] => [
      {
        header: translate('Package name') || '...',
        id: 'packageName',
        minWidth: 240,
        sortingField: 'packageName',
        width: 320,
        cell(item: PackagesTableItem): ReactElement {
          return <PackageName {...item} filteringText={filteringText} />;
        },
      },

      {
        header: translate('Total downloads') || '...',
        id: 'totalDownloads',
        maxWidth: 240,
        minWidth: 180,
        sortingField: 'totalDownloads',
        width: 240,
        cell(item: PackagesTableItem): ReactElement {
          return <TotalDownloads {...item} />;
        },
      },

      {
        header: translate('Explicit downloads') || '...',
        id: 'explicitDownloads',
        maxWidth: 240,
        minWidth: 180,
        sortingField: 'explicitDownloads',
        width: 240,
        cell(item: PackagesTableItem): ReactElement {
          return <ExplicitDownloads {...item} />;
        },
      },
    ],
    [filteringText, translate],
  );
}
