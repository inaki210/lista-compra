import React, { ReactNode } from 'react';

import { SiniestroParams } from '$core/domain/siniestros';
import { VariantsProps } from '$core/infraestructure/utils/VariantsProps';
import { MainContent } from '$ui/components/MainContent';
import { Section } from '$ui/components/Section';
import { Referencia } from '../Referencia';
import { SiniestroAside } from '../SiniestroAside';
import { SiniestroHeader } from '../SiniestroHeader';
import { SiniestroLoader } from '../SiniestroLoader';

export { SiniestroLayout };

type Props = AsideProps & BaseProps;

export type AsideProps = VariantsProps<{
  _: {};
  withAside: {
    withAgenda?: boolean;
  };
}>;

interface BaseProps extends SiniestroParams {
  children: ReactNode;
  showDetalleLink?: boolean;
}

function SiniestroLayout({
  children,
  showDetalleLink,
  siniestro,
  ramo,
  ...asideProps
}: Props) {
  return (
    <SiniestroLoader siniestro={siniestro} ramo={ramo}>
      {({ params, siniestro }) => (
        <Section>
          <Section.Header>
            <SiniestroHeader />
          </Section.Header>
          <MainContent>
            <MainContent.Body>
              <Referencia
                siniestro={siniestro.siniestro}
                params={params}
                showDetalleLink={showDetalleLink}
              />
              {children}
            </MainContent.Body>
            {asideProps.withAside && (
              <MainContent.Aside>
                <SiniestroAside withAgenda={asideProps.withAgenda} />
              </MainContent.Aside>
            )}
          </MainContent>
        </Section>
      )}
    </SiniestroLoader>
  );
}
