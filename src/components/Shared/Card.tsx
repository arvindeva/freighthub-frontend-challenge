import React from 'react';
import { Card as RebassCard } from 'rebass';

export const Card = ({ children }: any) => (
  <RebassCard
    width={[1, 1, 1 / 2]}
    p={1}
    my={3}
    bg="#f6f6ff"
    borderRadius={8}
    boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
  >
    {children}
  </RebassCard>
);
