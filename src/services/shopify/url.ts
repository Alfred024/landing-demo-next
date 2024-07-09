import { envs } from "app/config/env";

export const shopifyUrls = {
    'allProducts' : `${envs.SHOPIFY_STORE_HOST}/admin/api/2023-07/products.json`,
    'collections': {
        'all': `${envs.SHOPIFY_STORE_HOST}/admin/api/2023-07/smart_collections.json`,
        'single': (id : string) => `${envs.SHOPIFY_STORE_HOST}/admin/api/2023-07/collections/${id}/products.json`
    },
}