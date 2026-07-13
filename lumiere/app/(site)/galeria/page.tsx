type GalleryPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default function GalleryPage() {
    return (
        <main>
            <h1>Galeria do grupo Lumière</h1>
        </main>
    );
}