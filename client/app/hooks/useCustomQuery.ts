import { ApolloError, TypedDocumentNode, useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { UsersListProps } from '../types/user-types';

const useCustomQuery = (
    query: TypedDocumentNode, options: Object
):[
    UsersListProps, Boolean, ApolloError, Function
] => {
    const {
        data, loading, error, fetchMore, client
    } = useQuery(
        query,
        options
    );

    useEffect(() => {
        return () => {
            client.cache.modify({
                fields: {
                    users: value => ({
                        ...value,
                        result: []
                    })
                }
            });
        }
    }, [client]);

    const loadMore = useCallback(
        () => fetchMore({variables: {offset: data.users.result.length}}),
        [fetchMore, data]
    );

    return [data, loading, error, loadMore];
};

export default useCustomQuery;