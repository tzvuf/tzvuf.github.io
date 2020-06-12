import React from 'react';
import { Redirect } from 'umi';

export default function NoFound() {
  return <Redirect to="/index" />;
}
