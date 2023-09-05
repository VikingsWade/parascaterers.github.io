from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        # Send email
        email_message = f"Name: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}"

        send_mail(
            subject,
            email_message,
            email,  # Replace with your email address
            ['schandresh24@gmail.com'],  # Destination email address
            fail_silently=False,  # Set to True for production, False for debugging
            html_message=email_message,  # You can include HTML content here if needed
        )

        return render(request, 'index.html', {'success_message': 'Your message has been sent. Thank you!'})

    return render(request, "index.html")

def gallery_view(request):
    return render(request, 'inner-page.html')


