import Amplify from 'aws-amplify'
import React from 'react'

import awsConfig from './src/aws-exports'
import { Layout } from './src/components/Layout';

Amplify.configure(awsConfig)

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>
}