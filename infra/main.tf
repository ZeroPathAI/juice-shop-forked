provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "reports" {
  bucket = "juiceshop-reports-staging"
}

resource "aws_s3_bucket_public_access_block" "reports" {
  bucket                  = aws_s3_bucket.reports.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "reports" {
  bucket = aws_s3_bucket.reports.id
  acl    = "public-read-write"
}

resource "aws_security_group" "app" {
  name        = "juiceshop-app"
  description = "Application ingress"

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_instance" "orders" {
  identifier                  = "juiceshop-orders"
  engine                      = "postgres"
  instance_class              = "db.t3.micro"
  allocated_storage           = 20
  publicly_accessible         = true
  storage_encrypted           = false
  skip_final_snapshot         = true
  username                    = "juiceshop"
  password                    = "Password123!"
  backup_retention_period     = 0
}
