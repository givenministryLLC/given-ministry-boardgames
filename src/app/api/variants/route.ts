import { shopifyFetch, GET_PRODUCTS } from '@/lib/shopify';

export async function GET() {
    try {
        const result = await shopifyFetch<any>({
            query: GET_PRODUCTS,
            variables: { first: 3 }
        });

        // Debug: Let's see what we actually get back
        console.log('Full result:', JSON.stringify(result, null, 2));

        return Response.json({
            debug: true,
            fullResult: result,
            hasProducts: !!result?.products,
            resultKeys: Object.keys(result || {})
        });
    } catch (error) {
        console.error('Shopify error:', error);
        return Response.json({
            error: error.message
        }, { status: 500 });
    }
}