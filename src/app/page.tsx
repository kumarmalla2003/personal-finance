"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  CashStack,
  GraphUpArrow,
  PiggyBank,
  CreditCard2Back
} from "react-bootstrap-icons";

export default function Home() {
  return (
    <main className="min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="display-4 fw-bold mb-3">
              <span className="text-primary">Personal</span> Finance
            </h1>
            <p className="lead text-muted mb-4">
              Your comprehensive personal finance management and education platform.
              Track income, manage expenses, build wealth, and achieve financial freedom.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Button variant="primary" size="lg" href="/dashboard">
                Get Started
              </Button>
              <Button variant="outline-secondary" size="lg" href="/login">
                Sign In
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 dashboard-card border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <CashStack size={40} className="text-success" />
                </div>
                <Card.Title>Income Tracking</Card.Title>
                <Card.Text className="text-muted small">
                  Monitor all your income sources and optimize earnings
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 dashboard-card border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <GraphUpArrow size={40} className="text-primary" />
                </div>
                <Card.Title>Smart Budgeting</Card.Title>
                <Card.Text className="text-muted small">
                  Create budgets that work and stay on track
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 dashboard-card border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <PiggyBank size={40} className="text-warning" />
                </div>
                <Card.Title>Savings Goals</Card.Title>
                <Card.Text className="text-muted small">
                  Set and achieve your financial goals faster
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 dashboard-card border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <CreditCard2Back size={40} className="text-danger" />
                </div>
                <Card.Title>Debt Freedom</Card.Title>
                <Card.Text className="text-muted small">
                  Strategies to pay off debt and stay debt-free
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted small">
              Built with Next.js 14, TypeScript, Bootstrap 5, and PostgreSQL
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
