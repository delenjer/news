import {getNews} from '@/api/api';
import getQueryClient from '@/utils/getQueryClient';
import {dehydrate} from '@tanstack/query-core';
import {Hydrate} from '@/utils/hydrate.client';
import {Articles} from '@/components/Articles/Articles';
import React from 'react';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['articles'], getNews);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <main className="">
        <Articles />
      </main>
    </Hydrate>
  )
}
