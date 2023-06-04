import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerListaItens = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ListaItens, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyListaItens = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ListaItens, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ListaItens = LazyLoading extends LazyLoadingDisabled ? EagerListaItens : LazyListaItens

export declare const ListaItens: (new (init: ModelInit<ListaItens>) => ListaItens) & {
  copyOf(source: ListaItens, mutator: (draft: MutableModel<ListaItens>) => MutableModel<ListaItens> | void): ListaItens;
}