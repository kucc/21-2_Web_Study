import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import Router from 'next/router';

import { Info } from '@templates';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import useAntdModal from '@hooks/useAntdModal';
import { WRONG_LOGIN_ACCESS } from '@util/message';

const InfoPage = () => {
  const { data: me, isSuccess } = useQuery<User>('user', loadMyInfoAPI);

  useEffect(() => {
    if (isSuccess && !(me && me.id)) {
      useAntdModal({ message: WRONG_LOGIN_ACCESS });
      Router.replace('/login');
    }
  }, [me]);

  return me ? <Info title='최근에 본 장소/코스' navbarTitle='내 정보' /> : <div></div>;
};

export default InfoPage;
