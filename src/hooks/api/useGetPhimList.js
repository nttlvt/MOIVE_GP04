import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { quanLyPhimServices } from '../../services/quanLyPhim.services'

export const QUERY_KEY_PHIM_LIST = 'GetDanhSachPhim'
export const useGetPhimList = (tenPhim='') => {
    const q = useQuery({

        queryKey: [QUERY_KEY_PHIM_LIST],
        queryFn: () => quanLyPhimServices.getPhimList(tenPhim),
    }

    )
    return {
        ...q,
        data: q?.data?.data?.content,
    }
}
