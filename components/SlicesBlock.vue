<template>
    <main>
        <!-- Slice section template -->
        <div v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Headline with button slice component -->
            <template v-if="slice.slice_type === 'headline_with_button'">
                <headline-with-button :slice="slice"/>
            </template>
            <!-- Headline for the hero section full height component -->
            <template v-else-if="slice.slice_type === 'headline_hero'">
                <headline-hero :slice="slice"/>
            </template>      
            <!-- Simple Quote full height component  -->
            <template v-else-if="slice.slice_type === 'simple_quote'">
                <simple-quote :slice="slice"/>
            </template>   
            <!-- Image Gallery -->
            <template v-else-if="slice.slice_type === 'image_gallery'">
                <image-gallery :slice="slice"/>
            </template>      
            <!-- Three columns component -->
            <template v-else-if="slice.slice_type === 'three_cols'">
                <three-cols :slice="slice"/>
            </template>  
            <!-- Four columns component -->
            <template v-else-if="slice.slice_type === 'four_cols'">
                <four-cols :slice="slice"/>
            </template>            
             <!-- Headline for the hero section full height component -->
            <template v-else-if="slice.slice_type === 'content_copy'">
                <content-copy :slice="slice"/>
            </template>       
              <!-- Blog Preview component -->
            <template v-else-if="slice.slice_type === 'blog_preview'">
                <blog-preview :slice="slice"/>
            </template>       
            <!-- Full width image slice component -->
            <template v-else-if="slice.slice_type === 'full_width_image'">
                <full-width-image :slice="slice"/>
            </template>
            <!-- Info with image slice component -->
            <template v-else-if="slice.slice_type === 'info_with_image'">
                <info-with-image :slice="slice"/>
            </template>
            <!-- Text info slice component -->
            <template v-else-if="slice.slice_type === 'text_info'">
                <text-info :slice="slice"/>
            </template>
            <!-- Steps info slice component -->
            <template v-else-if="slice.slice_type === 'steps_info'">
                <steps-info :slice="slice"/>
            </template>
            <!-- Email signup slice component -->
            <template v-else-if="slice.slice_type === 'email_signup'">
                <email-signup :slice="slice"/>
            </template>
            <!-- Product Listing on product page component -->
            <template v-else-if="slice.slice_type === 'product_listings'">
                <product-listings :slice="slice"/>
            </template>
            <!-- Faqs Section on product page component -->
            <template v-else-if="slice.slice_type === 'faqs_section'">
                <faqs-section :slice="slice"/>
            </template>
            <!--Text image left component with cta -->
            <template v-else-if="slice.slice_type === 'textimg_left'">
                <textimg-left :slice="slice"/>
            </template>
            <!-- Text image right component with cta -->
            <template v-else-if="slice.slice_type === 'textimg_right'">
                <textimg-right :slice="slice"/>
            </template>
             <!-- Features dropshipping page component -->
            <template v-else-if="slice.slice_type === 'features'">
                <features :slice="slice"/>
            </template>
             <!-- Small Pricing Section component -->
            <template v-else-if="slice.slice_type === 'small_pricing'">
                <small-pricing :slice="slice"/>
            </template>        
             <!-- Pricing Plans Section component -->
            <template v-else-if="slice.slice_type === 'pricing_plans'">
                <pricing-plans :slice="slice"/>
            </template>     
             <!-- Product Categories on home page -->
            <template v-else-if="slice.slice_type === 'products_home'">
                <products-home :slice="slice"/>
            </template> 
              <!-- Video Hero on home page -->
            <template v-else-if="slice.slice_type === 'video_hero'">
                <video-hero :slice="slice"/>
            </template> 
        </div>
    </main>
</template>

<script>
// Imports for all slices
const HeadlineWithButton = () => import("./slices/HeadlineWithButton.vue");
const ImageGallery = () => import("./slices/ImageGallery.vue");
const SimpleQuote = () => import("./slices/SimpleQuote.vue");
const HeadlineHero = () => import("./slices/HeadlineHero.vue");
const ThreeCols = () => import("./slices/ThreeCols.vue");
const FourCols = () => import("./slices/FourCols.vue");
const ContentCopy = () => import("./slices/ContentCopy.vue");
const FullWidthImage = () => import("./slices/FullWidthImage.vue");
const InfoWithImage = () => import("./slices/InfoWithImage.vue");
const TextInfo = () => import("./slices/TextInfo.vue");
const EmailSignup = () => import("./slices/EmailSignup.vue");
const ProductListings = () => import("./slices/ProductListings.vue");
const FaqsSection = () => import("./slices/FaqsSection.vue");
const TextimgLeft = () => import("./slices/TextimgLeft.vue");
const TextimgRight = () => import("./slices/TextimgRight.vue");
const Features = () => import("./slices/Features.vue");
const SmallPricing = () => import("./slices/SmallPricing.vue");
const PricingPlans = () => import("./slices/PricingPlans.vue");
const BlogPreview = () => import("./slices/BlogPreview.vue");
const ProductsHome = () => import("./slices/ProductsHome.vue");
const StepsInfo = () => import("./slices/StepsInfo.vue");
const VideoHero = () => import("./slices/VideoHero.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    HeadlineWithButton,
    FullWidthImage,
    InfoWithImage,
    TextInfo,
    EmailSignup,
    HeadlineHero,
    ContentCopy,
    SimpleQuote,
    ImageGallery,
    ThreeCols,
    FourCols,
    ProductListings,
    TextimgLeft,
    TextimgRight,
    Features,
    SmallPricing,
    FaqsSection,
    PricingPlans,
    BlogPreview,
    ProductsHome,
    StepsInfo,
    VideoHero
  },
}

</script>