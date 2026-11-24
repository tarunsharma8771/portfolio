import Link from "next/link";
export default function NotFound(){return <div className="container" style={{padding:"100px 28px"}}><p className="eyebrow">404</p><h1>Page not found</h1><p className="lead">This page may have moved or does not exist.</p><Link href="/" className="btn btn-primary">Return home</Link></div>}
