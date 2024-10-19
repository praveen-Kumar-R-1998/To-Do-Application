function ErrorComponent() {
    return (
      <div className="ErrorComponent">
        <h1>Page Not Found</h1>
        <div>
          It seems the page you're looking for doesn't exist. Please check the URL
          or
          <a href="/"> return to the homepage</a>.
        </div>
      </div>
    );
  }
  export default ErrorComponent